import { ActionTemplate } from '~/utils/action-template';
import { makeActionCreator } from '~/utils/make-action-creator';
import { State, TagsByID } from '~/state';
import createReducer from '~/utils/create-reducer';
import { createPartialReducer } from '~/utils/create-partial-reducer';
import { getTags } from '~/getters/tags';
import { setTagsByID } from '~/setters/tags';
import { timeIsCloseEnough } from '~/utils/time-is-close-enough';

export type ActionID = 'TAG_APPEARS_AT_EDIT_BOX_EDITED';
export const ACTION_ID = 'TAG_APPEARS_AT_EDIT_BOX_EDITED';

export interface Payload {
  tagID: string;
  time: number;
}

export type Action = ActionTemplate<ActionID, Payload>;

export const actionCreator = makeActionCreator<ActionID, Payload>(ACTION_ID);

const getTagID = (state: State, { tagID }: Payload): string => tagID;

const getTime = (state: State, { time }: Payload): number => time;

const calculateTagsByID = (
  tagID: string,
  time: number,
  prevTagsByID: TagsByID
): TagsByID => {
  const { [tagID]: tag } = prevTagsByID;

  const { path } = tag;

  const { length } = path;

  if (
    length === 0 ||
    path[length - 1].time < time ||
    timeIsCloseEnough(path[0].time, time)
  )
    return prevTagsByID;

  let newPath = path;

  if (time < path[0].time) {
    newPath = [{ time, x: path[0].x, y: path[0].y }, ...path];
  } else {
    const index = path.findIndex(
      (value: { time: number; x: number; y: number }): boolean => {
        if (value.time >= time) {
          return true;
        }
        return false;
      }
    );

    if (timeIsCloseEnough(path[index].time, time))
      newPath = path.slice(index, path.length);
    else
      newPath = [
        {
          time,
          x: (path[index - 1].x + path[index].x) / 2,
          y: (path[index - 1].y + path[index].y) / 2
        },
        ...path.slice(index, path.length)
      ];
  }

  return { ...prevTagsByID, [tagID]: { ...tag, path: newPath } };
};

const partialReducers = [
  createPartialReducer(getTags, setTagsByID, calculateTagsByID, [
    getTagID,
    getTime,
    getTags
  ])
];

export const reducer = {
  [ACTION_ID]: createReducer<ActionID, State, Payload>(partialReducers)
};
