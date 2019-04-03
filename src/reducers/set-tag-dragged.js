// @flow

import type { State } from './default-state';
import type { SetTagDraggedAction } from '../actions';

const setTagDragged = (state: State, action: SetTagDraggedAction): State => {
  const {
    payload: { ID, dragged }
  } = action;

  const tag = state.tags.byID[ID];

  return {
    ...state,
    tags: {
      ...state.tags,
      byID: { ...state.tags.byID, [ID]: { ...tag, dragged } }
    }
  };
};

export default setTagDragged;
