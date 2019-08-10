import { v4 as uuid } from 'uuid';
import { State } from '../types/state';
import { getCurrentTime } from '../selectors/selectors';
import { AddNewTag } from '../actions/add-new-tag';

const addNewTag = (state: State, action: AddNewTag): State => {
  const {
    payload: { x, y }
  } = action;

  const newID = uuid();

  return {
    ...state,
    entities: {
      tags: {
        byID: {
          ...state.entities.tags.byID,
          [newID]: {
            globalID: undefined,
            path: [{ time: getCurrentTime(state), x, y }]
          }
        },
        allIDs: [...state.entities.tags.allIDs, newID]
      }
    }
  };
};

export default addNewTag;
