import { SET_REQUESTED_NORMALIZED_TIME } from '../actions/set-requested-normalized-time';

import { State, SetRequestedNormalizedTime } from '../types';

const setRequestedNormalizedTime = (
  state: State,
  action: SetRequestedNormalizedTime
): State => {
  const {
    payload: { time: requestedTimeNormalized }
  } = action;

  return {
    ...state,
    player: {
      ...state.player,
      requestedTimeNormalized
    }
  };
};

export default {
  actionType: SET_REQUESTED_NORMALIZED_TIME,
  reducer: setRequestedNormalizedTime
};
