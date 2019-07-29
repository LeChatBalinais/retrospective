import { State } from '../types/state';
import { SetPlaceNewTagMode } from '../types/action';

const setPlaceNewTagMode = (
  state: State,
  action: SetPlaceNewTagMode
): State => {
  let { payload: on } = action;

  if (on === undefined) {
    ({
      editorState: { placeNewTagMode: on }
    } = state);
    on = !on;
  }

  return {
    ...state,
    editorState: {
      ...state.editorState,
      placeNewTagMode: on
    }
  };
};

export default setPlaceNewTagMode;
