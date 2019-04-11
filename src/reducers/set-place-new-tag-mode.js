// @flow

import type { State } from '../types';
import type { SetPlaceNewTagModeAction } from '../actions';

const setPlaceNewTagMode = (
  state: State,
  action: SetPlaceNewTagModeAction
): State => {
  const { payload: on } = action;
  return {
    ...state,
    editorState: {
      ...state.editorState,
      placeNewTagMode: on
    }
  };
};

export default setPlaceNewTagMode;
