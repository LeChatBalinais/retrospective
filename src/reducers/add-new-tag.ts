import { v4 as uuid } from 'uuid';
import { State } from '../types/state';
import { AddNewTag } from '../types/action';

const addNewTag = (state: State, action: AddNewTag): State => {
  const {
    payload: { x, y }
  } = action;

  const newID = uuid();

  return {
    ...state,
    tags: {
      byID: {
        ...state.tags.byID,
        [newID]: {
          globalID: undefined,
          path: [{ time: state.superVideoState.currentTime, x, y }]
        }
      },
      allIDs: [...state.tags.allIDs, newID]
    }
  };
};

export default addNewTag;
