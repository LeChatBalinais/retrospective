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
    entities: {
      tags: {
        byID: {
          ...state.entities.tags.byID,
          [newID]: {
            globalID: undefined,
            path: [{ time: state.player.currentTimeNormalized, x, y }]
          }
        },
        allIDs: [...state.entities.tags.allIDs, newID]
      }
    }
  };
};

export default addNewTag;
