import { State } from '../types/state';
import { SetTagDragged } from '../types/action';

const setTagDragged = (state: State, action: SetTagDragged): State => {
  const {
    payload: { ID, dragged }
  } = action;

  const draggedTags = dragged ? [ID] : [];

  return {
    ...state,
    draggedTags
  };
};

export default setTagDragged;
