import { ActionTemplate } from '~/utils/action-template';
import { State, TagsByID } from '~/state';
import createReducer from '~/utils/create-reducer';
import { createPartialReducer } from '~/utils/create-partial-reducer';
import {
  getTagsByID,
  getTimeVideoAt,
  getTagBeingEditedID
} from '~/selectors/common';
import { setTagsByID } from '~/reducers/base';
import { makeActionCreator } from '~/utils/make-action-creator';

export type ActionID = 'MOUSE_MOVE_ON_AUGMENTATION';
export const ACTION_ID = 'MOUSE_MOVE_ON_AUGMENTATION';

export interface Payload {
  x: number;
  y: number;
}

export type Action = ActionTemplate<ActionID, Payload>;

export const actionCreator = makeActionCreator<ActionID, Payload>(ACTION_ID);

const getPosition = (
  state: State,
  payload: Payload
): { x: number; y: number } => payload;

const calculateTagsByID = (
  tagBeingEditedID: string,
  time: number,
  { x, y }: { x: number; y: number },
  prevTagsByID: TagsByID
): TagsByID => {
  if (tagBeingEditedID === undefined) return prevTagsByID;

  const { [tagBeingEditedID]: tagBeingEdited } = prevTagsByID;

  const { path } = tagBeingEdited;

  let newPath = path;

  if (newPath.length === 0 || newPath[newPath.length - 1].time <= time) {
    newPath = [...newPath, { time, x, y }];
  } else if (newPath[0].time >= time) {
    newPath = [{ time, x, y }, ...newPath];
  } else {
    const prepEnd = newPath.findIndex(
      (value: { time: number; x: number; y: number }): boolean => {
        if (value.time >= time - 0.015) {
          return true;
        }
        return false;
      }
    );

    let postBegin = prepEnd;

    while (
      postBegin < newPath.length &&
      newPath[postBegin].time > time + 0.015
    ) {
      postBegin += 1;
    }

    newPath = [
      ...newPath.slice(0, prepEnd),
      { time, x, y },
      ...newPath.slice(postBegin, newPath.length - 1)
    ];
  }

  return {
    ...prevTagsByID,
    [tagBeingEditedID]: { ...tagBeingEdited, path: newPath }
  };
};

const partialReducers = [
  createPartialReducer(getTagsByID, setTagsByID, calculateTagsByID, [
    getTagBeingEditedID,
    getTimeVideoAt,
    getPosition,
    getTagsByID
  ])
];

export const reducer = {
  [ACTION_ID]: createReducer<ActionID, State>(partialReducers)
};
