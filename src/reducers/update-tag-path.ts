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

  let { startTime } = tag;
  const { path } = tag;

  let newPath = path;

  if (startTime === undefined) {
    startTime = currentTime;
    newPath = [];
  }

  newPath = [...newPath, { time: currentTime, x, y }];

  return {
    ...state,
    tags: {
      ...state.tags,
      byID: { ...state.tags.byID, [ID]: { ...tag, startTime, path: newPath } }
    }
  };
};

export default updateTagPath;
