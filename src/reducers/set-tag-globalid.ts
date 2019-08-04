import { State } from '../types/state';
import { SetTagGlobalID } from '../types/action';

const setTagGlobalID = (state: State, action: SetTagGlobalID): State => {
  const {
    payload: { ID, globalID }
  } = action;

  const {
    tags: {
      byID: { [ID]: tag }
    }
  } = state;

  return {
    ...state,
    tags: {
      ...state.tags,
      byID: { ...state.tags.byID, [ID]: { ...tag, globalID } }
    }
  };
};

export default setTagGlobalID;
