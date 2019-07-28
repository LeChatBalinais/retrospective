import { State } from '../types/state';
import { SetCurrentTime } from '../types/action';
import { getVideoDuration } from '../selectors/selectors';

const setCurrentTime = (state: State, action: SetCurrentTime): State => {
  const {
    payload: { time, isNormalized }
  } = action;

  let currentTime = time;

  if (isNormalized) {
    currentTime = getVideoDuration(state) * time;
  }

  return {
    ...state,
    superVideoState: {
      ...state.superVideoState,
      currentTime
    }
  };
};

export default setCurrentTime;
