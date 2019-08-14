import { v4 as uuid } from 'uuid';
import { ThunkAction, ThunkDispatch } from '../../types/types';
import setTags from '../set-tags';
import { Tag, Table } from '../../types/state';

export default function fetchVideoTagsAsync(videoID: string): ThunkAction {
  return (dispatch: ThunkDispatch): void => {
    fetch(`http://localhost:9000/markers`).then((response): void => {
      response.json().then((data): void => {
        const {
          tags: { byID, allIDs }
        } = data;

        const tags: Table<Tag> = { byID: {}, allIDs: [] };

        allIDs.forEach((ID: string): void => {
          const localID = uuid();
          tags.allIDs.push(localID);
          tags.byID[localID] = byID[ID];
        });
        dispatch(setTags({ tags }));
      });
    });
  };
}
