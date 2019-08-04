import { v4 as uuid } from 'uuid';
import { State } from '../types/state';
import { SetTags } from '../types/action';

const setTags = (state: State, action: SetTags): State => {
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
    entities: {
      tags: { byID, allIDs }
    },
    tagEditor: { ...state.tagEditor, currentTag: undefined }
  };
};

export default setTags;
