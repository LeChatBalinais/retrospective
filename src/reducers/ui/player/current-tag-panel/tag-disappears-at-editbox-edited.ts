import {
  TAG_DISAPPEARS_AT_EDIT_BOX_EDITED,
  TagDisappearsAtEditBoxEditedType,
  TagDisappearsAtEditBoxEditedPayload
} from '~/actions';
import { State, TagsByID } from '~/types';
import createReducer from '~/utils/create-reducer';
import { createPartialReducer } from '~/utils/create-partial-reducer';
import { getTagsByID } from '~/selectors/common';
import { setTagsByID } from '~/reducers/base';

const getTagID = (
  state: State,
  { tagID }: TagDisappearsAtEditBoxEditedPayload
): string => tagID;

const getTime = (
  state: State,
  { time }: TagDisappearsAtEditBoxEditedPayload
): number => time;

const calculateTagsByID = (
  tagID: string,
  time: number,
  prevTagsByID: TagsByID
): TagsByID => {
  const { [tagID]: tag } = prevTagsByID;

  const { path } = tag;

  const { length } = path;

  if (length === 0 || path[0].time > time || path[length - 1].time === time)
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

    if (path[index].time === time) newPath = path.slice(0, index + 1);
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

const partialReducers = [
  createPartialReducer(getTagsByID, setTagsByID, calculateTagsByID, [
    getTagID,
    getTime,
    getTagsByID
  ])
];

export default {
  actionType: TAG_DISAPPEARS_AT_EDIT_BOX_EDITED,
  reducer: createReducer<
    TagDisappearsAtEditBoxEditedType,
    State,
    TagDisappearsAtEditBoxEditedPayload
  >(partialReducers)
};
