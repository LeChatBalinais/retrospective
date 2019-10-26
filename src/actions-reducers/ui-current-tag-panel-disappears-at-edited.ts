import { ActionTemplate } from '~/utils/action-template';
import { makeActionCreator } from '~/utils/make-action-creator';
import { State, TagsByID } from '~/state';
import { createReducer } from '~/utils/experimental/create-reducer';
import { getTags } from '~/getters/tags';
import { setTagsByID } from '~/setters/tags';
import { timeIsCloseEnough } from '~/utils/time-is-close-enough';
import { mapStateToDeterminer } from '~/utils/experimental/map-state-to-determiner';

export type ActionID = 'TAG_DISAPPEARS_AT_EDIT_BOX_EDITED';
export const ACTION_ID = 'TAG_DISAPPEARS_AT_EDIT_BOX_EDITED';

export interface Payload {
  tagID: string;
  time: number;
}

export type Action = ActionTemplate<ActionID, Payload>;

export const actionCreator = makeActionCreator<ActionID, Payload>(ACTION_ID);

const getTagID = (state: State, { tagID }: Payload): string => tagID;

const getTime = (state: State, { time }: Payload): number => time;

const getNewTagsByID = (
  tagID: string,
  time: number,
  prevTagsByID: TagsByID
): TagsByID => {
  const { [tagID]: tag } = prevTagsByID;

  const { path } = tag;

  const { length } = path;

  if (
    length === 0 ||
    path[0].time > time ||
    timeIsCloseEnough(path[length - 1].time, time)
  )
    return prevTagsByID;

  let newPath = path;

  if (time > path[length - 1].time) {
    newPath = [...path, { time, x: path[length - 1].x, y: path[length - 1].y }];
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
      newPath = path.slice(0, index + 1);
    else
      newPath = [
        ...path.slice(0, index + 1),
        {
          time,
          x: (path[index].x + path[index].x) / 2,
          y: (path[index].y + path[index].y) / 2
        }
      ];
  }

  return { ...prevTagsByID, [tagID]: { ...tag, path: newPath } };
};

export const reducer = createReducer(ACTION_ID, [
  [
    getTags,
    setTagsByID,
    mapStateToDeterminer(getNewTagsByID, [getTagID, getTime, getTags])
  ]
]);
