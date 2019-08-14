import { State } from '../types/state';
import {
  SetCurrentNormalizedTime,
  SET_CURRENT_NORMALIZED_TIME
} from '../actions/set-current-normalized-time';

const setCurrentNormalizedTime = (
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

export default {
  actionType: SET_CURRENT_NORMALIZED_TIME,
  reducer: setCurrentNormalizedTime
};
