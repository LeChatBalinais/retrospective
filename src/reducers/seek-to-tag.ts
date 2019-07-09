import { State } from '../types/state';
import { SeekToTag } from '../types/action';

const setCurrentTime = (state: State, action: SeekToTag): State => {
  const { payload: tagID } = action;

  const {
    tags: {
      byID: { [tagID]: tag }
    },
    superVideoState: { currentTime }
  } = state;

  if (
    currentTime >= tag.start &&
    currentTime < tag.path[tag.path.length - 1].time
  )
    return state;

  return {
    ...state,
    superVideoState: {
      ...state.superVideoState,
      currentTime: tag.start
    }
  };
};

export default setCurrentTime;
