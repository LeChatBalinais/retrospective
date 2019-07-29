import { State } from '../types/state';
import { SetPlayback } from '../types/action';

const setPlayback = (state: State, action: SetPlayback): State => {
  let { payload: on } = action;

  if (on === undefined) {
    ({
      superVideoState: { playback: on }
    } = state);
    on = !on;
  }

  return {
    ...state,
    superVideoState: {
      ...state.superVideoState,
      playback: on
    }
  };
};

export default setPlayback;
