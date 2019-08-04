import { State } from '../types/state';
import { UpdateTagPath } from '../types/action';
import { getCurrentTime } from '../selectors/selectors';

const updateTagPath = (state: State, action: UpdateTagPath): State => {
  let {
    payload: { ID }
  } = action;

  const {
    payload: { x, y }
  } = action;

  if (ID === undefined) {
    ({
      tagEditor: {
        tagsBeingEdited: [ID]
      }
    } = state);
  }

  if (ID === undefined) return state;

  const {
    entities: {
      tags: {
        byID: { [ID]: tag }
      }
    }
  } = state;

  const currentTime = getCurrentTime(state);

  const { path } = tag;

  let newPath = path;

  if (newPath.length === 0 || newPath[newPath.length - 1].time <= currentTime) {
    newPath = [...newPath, { time: currentTime, x, y }];
  } else if (newPath[0].time >= currentTime) {
    newPath = [{ time: currentTime, x, y }, ...newPath];
  } else {
    const prepEnd = newPath.findIndex(
      (value: { time: number; x: number; y: number }): boolean => {
        if (value.time >= currentTime - 0.015) {
          return true;
        }
        return false;
      }
    );

    let postBegin = prepEnd;

    while (
      postBegin < newPath.length &&
      newPath[postBegin].time > currentTime + 0.015
    ) {
      postBegin += 1;
    }

    newPath = [
      ...newPath.slice(0, prepEnd),
      { time: currentTime, x, y },
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

export default updateTagPath;
