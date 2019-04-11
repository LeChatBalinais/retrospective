// @flow

import type { State } from '../state-types';
import type { SetPlaybackAction } from '../actions';

const setPlayback = (state: State, action: SetPlaybackAction): State => {
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
