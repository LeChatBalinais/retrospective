import { State } from '../types/state';
import { SetPlayback } from '../types/action';

const setPlayback = (state: State, action: SetPlayback): State => {
  let {
    payload: { playback: on }
  } = action;

  if (on === undefined) {
    ({
      player: { playback: on }
    } = state);
    on = !on;
  }

  return {
    ...state,
    player: {
      ...state.player,
      playback: on
    }
  };
};

export default setPlayback;
