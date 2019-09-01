import { UPDATE_TAG_PATH } from '../actions/update-tag-path';
import { State, UpdateTagPath } from '../types';

const updateTagPath = (state: State, action: UpdateTagPath): State => {
  const {
    payload: { ID, time, x, y }
  } = action;

  if (ID === undefined) return state;

  const {
    entities: {
      tags: {
        byID: { [ID]: tag }
      }
    }
  } = state;

  const { path } = tag;

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
    ...state,
    entities: {
      tags: {
        ...state.entities.tags,
        byID: { ...state.entities.tags.byID, [ID]: { ...tag, path: newPath } }
      }
    }
  };
};

export default { actionType: UPDATE_TAG_PATH, reducer: updateTagPath };
