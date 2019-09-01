import { SET_CURRENT_NORMALIZED_TIME } from '../actions/set-current-normalized-time';

import { State, SetCurrentNormalizedTime } from '../types';

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
      currentTimeNormalized,
      requestedTimeNormalized: currentTimeNormalized
    }
  };
};

export default {
  actionType: SET_CURRENT_NORMALIZED_TIME,
  reducer: setCurrentNormalizedTime
};
