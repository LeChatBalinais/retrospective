import { State } from '../types/state';
import { SetTagGlobalID } from '../types/action';

const setTagGlobalID = (state: State, action: SetTagGlobalID): State => {
  const {
    payload: { ID, globalID }
  } = action;

  const {
    entities: {
      tags: {
        byID: { [ID]: tag }
      }
    }
  } = state;

  return {
    ...state,
    entities: {
      tags: {
        ...state.entities.tags,
        byID: { ...state.entities.tags.byID, [ID]: { ...tag, globalID } }
      }
    }
  };
};

export default setTagGlobalID;
