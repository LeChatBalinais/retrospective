import {
  MOUSE_UP_ON_AUGMENTATION,
  MouseUpOnAugmentationPayload
} from '~/actions';
import { MouseUpOnAugmentationType, State, TagsByID } from '~/types';
import createReducer from '~/utils/create-reducer';
import { createPartialReducer } from '~/utils/create-partial-reducer';
import {
  getTagsByID,
  getTimeVideoAt,
  getTagBeingEditedID
} from '~/selectors/common';
import { setTagsByID, setTagBeingEditedID } from '~/reducers/base';

const getPosition = (
  state: State,
  payload: MouseUpOnAugmentationPayload
): { x: number; y: number } => payload;

const calculateTagBeingEditedID = (): string => undefined;

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
  createPartialReducer(
    getTagBeingEditedID,
    setTagBeingEditedID,
    calculateTagBeingEditedID
  ),
  createPartialReducer(getTagsByID, setTagsByID, calculateTagsByID, [
    getTagBeingEditedID,
    getTimeVideoAt,
    getPosition,
    getTagsByID
  ])
];

export default {
  actionType: MOUSE_UP_ON_AUGMENTATION,
  reducer: createReducer<
    MouseUpOnAugmentationType,
    State,
    MouseUpOnAugmentationPayload
  >(partialReducers)
};