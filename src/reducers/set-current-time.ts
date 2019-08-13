import { State } from '../types/state';
import { SetCurrentNormalizedTime } from '../actions/set-current-normalized-time';

const setCurrentTime = (
  state: State,
  action: SetCurrentNormalizedTime
): State => {
  const {
    payload: { time: currentTimeNormalized }
  } = action;

  return {
    ...state,
    player: {
      ...state.player,
      currentTimeNormalized
    }
  };
};

export default setCurrentTime;
