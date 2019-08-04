import { State } from '../types/state';
import { SetCurrentTime } from '../types/action';
import { getVideoDuration } from '../selectors/selectors';

const setCurrentTime = (state: State, action: SetCurrentTime): State => {
  const {
    payload: { time, isNormalized }
  } = action;

  let currentTimeNormalized = time;

  if (!isNormalized) {
    currentTimeNormalized = time / getVideoDuration(state);
  }

  return {
    ...state,
    player: {
      ...state.player,
      currentTimeNormalized
    }
  };
};

export default setCurrentTime;
