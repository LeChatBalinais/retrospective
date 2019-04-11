// @flow

import type { State } from '../state-types';
import type { UpdateTagPathAction } from '../actions';

const updateTagPath = (state: State, action: UpdateTagPathAction): State => {
  const {
    payload: { ID, x, y }
  } = action;

  const {
    superVideoState: { currentTime },
    tags: {
      byID: { [ID]: tag }
    }
  } = state;

  let { startTime } = tag;
  const { path, x: startX, y: startY } = tag;

  let newPath = path;

  if (startTime === undefined) {
    startTime = currentTime;
    newPath = [];
  }

  newPath = [...newPath, { time: currentTime, x: x - startX, y: y - startY }];

  return {
    ...state,
    tags: {
      ...state.tags,
      byID: { ...state.tags.byID, [ID]: { ...tag, startTime, path: newPath } }
    }
  };
};

export default updateTagPath;
