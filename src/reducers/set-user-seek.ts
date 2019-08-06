import { State } from '../types/state';
import { SetUserSeek } from '../types/action';

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
