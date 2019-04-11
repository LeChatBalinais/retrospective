// @flow

import type { State } from '../types';
import type { SetDurationAction } from '../actions';

const setDuration = (state: State, action: SetDurationAction): State => {
  const { payload: duration } = action;
  return {
    ...state,
    superVideoState: {
      ...state.superVideoState,
      duration
    }
  };
};

export default setDuration;
