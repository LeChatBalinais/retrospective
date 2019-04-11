// @flow

import type { State } from '../types';
import type { SetCurrentTimeAction } from '../actions';

const setCurrentTime = (state: State, action: SetCurrentTimeAction): State => {
  const { payload: currentTime } = action;
  return {
    ...state,
    superVideoState: {
      ...state.superVideoState,
      currentTime
    }
  };
};

export default setCurrentTime;
