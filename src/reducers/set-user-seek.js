// @flow

import type { State } from '../types';
import type { SetUserSeekAction } from '../actions';

const setUserSeek = (state: State, action: SetUserSeekAction): State => {
  const { payload: on } = action;
  return {
    ...state,
    superVideoState: {
      ...state.superVideoState,
      userSeek: on
    }
  };
};

export default setUserSeek;
