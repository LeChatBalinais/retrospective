import { State } from '../types/state';
import { SetPlaceNewTagMode } from '../types/action';

const setPlaceNewTagMode = (
  state: State,
  action: SetPlaceNewTagMode
): State => {
  let { payload: userIsPlacingNewTag } = action;

  if (userIsPlacingNewTag === undefined) {
    ({
      tagEditor: { userIsPlacingNewTag }
    } = state);
    userIsPlacingNewTag = !userIsPlacingNewTag;
  }

  return {
    ...state,
    tagEditor: {
      ...state.tagEditor,
      userIsPlacingNewTag
    }
  };
};

export default setPlaceNewTagMode;
