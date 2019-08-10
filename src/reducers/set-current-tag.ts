import { State } from '../types/state';
import { SetCurrentTag } from '../actions/set-current-tag';

const setCurrentTag = (state: State, action: SetCurrentTag): State => {
  const {
    payload: { ID }
  } = action;

  return {
    ...state,
    tagEditor: {
      ...state.tagEditor,
      currentTag: ID
    }
  };
};

export default setCurrentTag;
