import { SET_TAGS } from '../actions/set-tags';

import { State, SetTags } from '../types';

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
