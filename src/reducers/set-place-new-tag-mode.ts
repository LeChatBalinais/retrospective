import { State } from '../types/state';
import {
  SetPlaceNewTagMode,
  SET_PLACE_NEW_TAG_MODE
} from '../actions/set-place-new-tag-mode';

const setPlaceNewTagMode = (
  state: State,
  action: SetPlaceNewTagMode
): State => {
  const {
    payload: { mode: userIsPlacingNewTag }
  } = action;

  return {
    ...state,
    tagEditor: {
      ...state.tagEditor,
      userIsPlacingNewTag
    }
  };
};

export default {
  actionType: SET_PLACE_NEW_TAG_MODE,
  reducer: setPlaceNewTagMode
};
