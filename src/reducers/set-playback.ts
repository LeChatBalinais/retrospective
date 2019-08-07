import { State } from '../types/state';
import { SetPlayback } from '../types/action';

const setPlayback = (state: State, action: SetPlayback): State => {
  const {
    payload: { playback }
  } = action;

  return {
    ...state,
    player: {
      ...state.player,
      playback
    }
  };
};

export default setPlayback;
