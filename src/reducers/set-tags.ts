import { State } from '../types/state';
import { SetTags, SET_TAGS } from '../actions/set-tags';

const setTags = (state: State, action: SetTags): State => {
  const {
    payload: { tags }
  } = action;

  return {
    ...state,
    entities: {
      tags
    },
    tagEditor: { ...state.tagEditor, currentTag: undefined }
  };
};

export default { actionType: SET_TAGS, reducer: setTags };
