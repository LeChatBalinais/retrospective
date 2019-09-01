import { State } from '../types';
import { SetUserSeek, SET_USER_SEEK } from '../actions/set-user-seek';

const setUserSeek = (state: State, action: SetUserSeek): State => {
  const {
    payload: { mode: on }
  } = action;

  const {
    player: { requestedTimeNormalized }
  } = state;

  let {
    player: { currentTimeNormalized }
  } = state;

  if (!on) {
    currentTimeNormalized = requestedTimeNormalized;
  }

  return {
    ...state,
    player: {
      ...state.player,
      userSeek: on,
      currentTimeNormalized,
      requestedTimeNormalized
    }
  };
};

export default { actionType: SET_USER_SEEK, reducer: setUserSeek };
