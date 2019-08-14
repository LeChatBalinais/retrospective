import { State } from '../types/state';
import { SetDraggedTag, SET_DRAGGED_TAG } from '../actions/set-dragged-tag';

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
