import { State } from '../types/state';
import { SetDraggedTag } from '../actions/set-dragged-tag';

const setDraggedTag = (state: State, action: SetDraggedTag): State => {
  const {
    payload: { ID }
  } = action;

  return {
    ...state,
    tagEditor: { ...state.tagEditor, tagsBeingEdited: [ID] }
  };
};

export default setDraggedTag;
