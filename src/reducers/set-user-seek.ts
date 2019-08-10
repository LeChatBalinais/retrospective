import { State } from '../types/state';
import { SetUserSeek } from '../actions/set-user-seek';

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

export default setUserSeek;
