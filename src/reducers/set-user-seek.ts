import { State } from '../types';
import { SetUserSeek, SET_USER_SEEK } from '../actions/set-user-seek';

const setUserSeek = (state: State, action: SetUserSeek): State => {
  const {
    payload: { status: seekingStatus }
  } = action;

  return {
    ...state,
    player: {
      ...state.player,
      seekingStatus
    }
  };
};

const actionTypeReducerPair = {
  actionType: SET_USER_SEEK,
  reducer: setUserSeek
};

export default actionTypeReducerPair;
