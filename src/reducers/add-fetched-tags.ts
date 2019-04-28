import { State } from '../types/state';
import { AddFetchedTags } from '../types/action';

const addFetchedMarks = (state: State, action: AddFetchedTags): State => {
  const {
    payload: { byID: fetchedByID, allIDs: fetchedAllIDs }
  } = action;

  const {
    localTags,
    tags: { byID: tagsByID }
  } = state;

  const allIDs = [
    ...fetchedAllIDs.filter((ID: string): boolean => !localTags.includes(ID)),
    ...localTags
  ];

  const localTagsByID = {};

  localTags.forEach(
    (ID: string): void => {
      localTagsByID[ID] = tagsByID[ID];
    }
  );

  const byID = { ...fetchedByID, ...localTagsByID };

  const updatedLocalTags = localTags.filter(
    (ID: string): boolean => !fetchedAllIDs.includes(ID)
  );

  return {
    ...state,
    tags: { byID, allIDs },
    localTags: updatedLocalTags
  };
};

export default addFetchedMarks;
