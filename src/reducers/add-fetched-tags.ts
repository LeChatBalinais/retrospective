import { v4 as uuid } from 'uuid';
import { State } from '../types/state';
import { AddFetchedTags } from '../types/action';

const addFetchedMarks = (state: State, action: AddFetchedTags): State => {
  const {
    payload: { allIDs: allFetchedIDs, byID: fetchedByID }
  } = action;

  let byID = {};
  let allIDs = [];

  allFetchedIDs.forEach((ID: string): void => {
    const localID = uuid();
    allIDs = [...allIDs, localID];
    byID = { ...byID, [localID]: fetchedByID[ID] };
  });

  return {
    ...state,
    tags: { byID, allIDs },
    currentTag: undefined
  };
};

export default addFetchedMarks;
