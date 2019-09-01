import { getCurrentTime } from '../selectors/selectors';
import { ADD_NEW_TAG } from '../actions/add-new-tag';
import { State, AddNewTag } from '../types';

const addNewTag = (state: State, action: AddNewTag): State => {
  const {
    payload: { ID, x, y }
  } = action;

  return {
    ...state,
    entities: {
      tags: {
        byID: {
          ...state.entities.tags.byID,
          [ID]: {
            globalID: undefined,
            path: [{ time: getCurrentTime(state), x, y }]
          }
        },
        allIDs: [...state.entities.tags.allIDs, ID]
      }
    }
  };
};

export default { actionType: ADD_NEW_TAG, reducer: addNewTag };
