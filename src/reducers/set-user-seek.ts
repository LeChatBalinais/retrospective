import { State } from '../types/state';
import { SetUserSeek, SET_USER_SEEK } from '../actions/set-user-seek';

const setUserSeek = (state: State, action: SetUserSeek): State => {
  const {
    payload: { mode: on }
  } = action;
  return {
    ...state,
    player: {
      ...state.player,
      userSeek: on
    }
  };
};

export default { actionType: SET_USER_SEEK, reducer: setUserSeek };
