import { SET_TIME_TAG_APPEARS_AT } from '../actions/set-time-tag-appears-at';
import { State, SetTimeTagAppearsAt } from '../types';

const setTimeTagAppearsAt = (
  state: State,
  action: SetTimeTagAppearsAt
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

  if (length === 0 || path[length - 1].time < time || path[0].time === time)
    return state;

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
  actionType: SET_TIME_TAG_APPEARS_AT,
  reducer: setTimeTagAppearsAt
};
