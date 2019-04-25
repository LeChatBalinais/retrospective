import { State } from '../types/state';
import { SetPlaceNewTagMode } from '../types/action';

const setPlaceNewTagMode = (
  state: State,
  action: SetPlaceNewTagMode
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
