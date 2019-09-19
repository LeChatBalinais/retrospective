import {
  TAG_APPEARS_AT_EDIT_BOX_EDITED,
  TagAppearsAtEditBoxEditedType,
  TagAppearsAtEditBoxEditedPayload
} from '~/actions';
import { State, TagsByID } from '~/types';
import createReducer from '~/utils/create-reducer';
import { createPartialReducer } from '~/utils/create-partial-reducer';
import { getTagsByID } from '~/selectors/common';
import { setTagsByID } from '~/reducers/base';

const getTagID = (
  state: State,
  { tagID }: TagAppearsAtEditBoxEditedPayload
): string => tagID;

const getTime = (
  state: State,
  { time }: TagAppearsAtEditBoxEditedPayload
): number => time;

const calculateTagsByID = (
  tagID: string,
  time: number,
  prevTagsByID: TagsByID
): TagsByID => {
  const { [tagID]: tag } = prevTagsByID;

  const { path } = tag;

  const { length } = path;

  if (length === 0 || path[length - 1].time < time || path[0].time === time)
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

    if (path[index].time === time) newPath = path.slice(index, path.length);
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
  createPartialReducer(getTagsByID, setTagsByID, calculateTagsByID, [
    getTagID,
    getTime,
    getTagsByID
  ])
];

export default {
  actionType: TAG_APPEARS_AT_EDIT_BOX_EDITED,
  reducer: createReducer<
    TagAppearsAtEditBoxEditedType,
    State,
    TagAppearsAtEditBoxEditedPayload
  >(partialReducers)
};
