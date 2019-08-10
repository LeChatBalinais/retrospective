import { State } from '../types/state';
import { SetPlaceNewTagMode } from '../actions/set-place-new-tag-mode';

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

export default setPlaceNewTagMode;
