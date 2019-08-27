import { State } from '../types/state';
import {
  SetTimeTagDisappearsAt,
  SET_TIME_TAG_DISAPPEARS_AT
} from '../actions/set-time-tag-disappears-at';

const setTimeTagAppearsAt = (
  state: State,
  action: SetTimeTagDisappearsAt
): State => {
  const {
    payload: { ID, time }
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

  const { length } = path;

  if (length === 0 || path[0].time > time || path[length - 1].time === time)
    return state;

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

export default {
  actionType: SET_TIME_TAG_DISAPPEARS_AT,
  reducer: setTimeTagAppearsAt
};
