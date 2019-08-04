import { v4 as uuid } from 'uuid';
import { State } from '../types/state';
import { AddNewTag } from '../types/action';
import { getCurrentTime } from '../selectors/selectors';

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
