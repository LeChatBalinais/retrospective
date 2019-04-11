// @flow

import type { State } from '../types';
import type { FetchAllVideoMarks } from '../actions';

const setUserSeek = (state: State, action: FetchAllVideoMarks): State => {
  const {
    payload: { markers }
  } = action;

  return {
    ...state,
    tags: markers
  };
};

export default setUserSeek;
