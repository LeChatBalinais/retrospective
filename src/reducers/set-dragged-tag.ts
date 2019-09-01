import { SET_DRAGGED_TAG } from '../actions/set-dragged-tag';
import { State, SetDraggedTag } from '../types';

const setDraggedTag = (state: State, action: SetDraggedTag): State => {
  const {
    payload: { ID }
  } = action;

  return {
    ...state,
    tagEditor: { ...state.tagEditor, tagsBeingEdited: [ID] }
  };
};

export default { actionType: SET_DRAGGED_TAG, reducer: setDraggedTag };
