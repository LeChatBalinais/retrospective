import { State } from '../types/state';
import { SetTagDragged } from '../types/action';

const setTagDragged = (state: State, action: SetTagDragged): State => {
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
