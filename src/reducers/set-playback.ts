import { State } from '../types/state';
import { SetPlayback } from '../types/action';

const setPlayback = (state: State, action: SetPlayback): State => {
  const { payload: on } = action;
  return {
    ...state,
    superVideoState: {
      ...state.superVideoState,
      playback: on
    }
  };
};

export default setPlayback;
