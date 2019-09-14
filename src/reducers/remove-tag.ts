import { getCurrentTagID } from '../selectors/selectors';
import { REMOVE_TAG } from '../actions/remove-tag';

import { State, RemoveTag } from '../types';

const removeTag = (state: State, action: RemoveTag): State => {
  const {
    payload: { ID: IDtoRemove }
  } = action;

  const {
    entities: {
      tags: { byID, allIDs }
    }
  } = state;

  const index = allIDs.findIndex((ID: string): boolean => ID === IDtoRemove);

  const oldCurrentTag = getCurrentTagID(state);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { [IDtoRemove]: removedTag, ...newByID } = byID;

  return {
    ...state,
    tagEditor: {
      ...state.tagEditor,
      currentTag: oldCurrentTag === IDtoRemove ? undefined : oldCurrentTag
    },

    entities: {
      tags: {
        allIDs: [...allIDs.slice(0, index), ...allIDs.slice(index + 1)],
        byID: newByID
      }
    }
  };
};

export default { actionType: REMOVE_TAG, reducer: removeTag };
