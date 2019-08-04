import { State } from '../types/state';
import { RemoveTag } from '../types/action';
import { getCurrentTagID } from '../selectors/selectors';

const removeTag = (state: State, action: RemoveTag): State => {
  const {
    payload: { ID: IDtoRemove }
  } = action;

  const {
    tags: { byID, allIDs }
  } = state;

  const index = allIDs.findIndex((ID: string): boolean => ID === IDtoRemove);

  const oldCurrentTag = getCurrentTagID(state);

  const { [IDtoRemove]: removedTag, ...newByID } = byID;

  return {
    ...state,
    currentTag: oldCurrentTag === IDtoRemove ? undefined : oldCurrentTag,
    tags: {
      allIDs: [...allIDs.slice(0, index), ...allIDs.slice(index + 1)],
      byID: newByID
    }
  };
};

export default removeTag;
