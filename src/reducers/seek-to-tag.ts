import { State } from '../types/state';
import { SeekToTag } from '../types/action';

const setCurrentTime = (state: State, action: SeekToTag): State => {
  const { payload: tagID } = action;

  const {
    tags: {
      byID: { [tagID]: tag }
    }
  } = state;

  return {
    ...state,
    superVideoState: {
      ...state.superVideoState,
      currentTime: tag.path[0].time
    }
  };
};

export default setCurrentTime;
