import { State } from '../types/state';
import { getCurrentTime } from '../selectors/selectors';
import { AddNewTag, ADD_NEW_TAG } from '../actions/add-new-tag';

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
