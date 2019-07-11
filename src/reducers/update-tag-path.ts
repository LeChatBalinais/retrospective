import { State } from '../types/state';
import { UpdateTagPath } from '../types/action';

const updateTagPath = (state: State, action: UpdateTagPath): State => {
  const {
    payload: { ID, x, y }
  } = action;

  const {
    superVideoState: { currentTime },
    tags: {
      byID: { [ID]: tag }
    }
  } = state;

  let { start } = tag;
  const { path } = tag;

  let newPath = path;

  if (start === undefined) {
    start = currentTime;
    newPath = [];
  }

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
    tags: {
      ...state.tags,
      byID: { ...state.tags.byID, [ID]: { ...tag, start, path: newPath } }
    }
  };
};

export default updateTagPath;
