import { createSelector } from 'reselect';
import { TagsByID } from '~/state';
import { getTagBeingEditedIDs } from '~/getters/tag-editor';
import { getTimeVideoAt } from './get-time-video-at';
import { getTags, getTagIDs } from '~/getters/tags';

const getCurrentlyVisibleTagIDs = createSelector(
  [getTagIDs, getTags, getTimeVideoAt, getTagBeingEditedIDs],
  (
    tagIDs: string[],
    byID: TagsByID,
    currentTime: number,
    tagIDsBeingEdited: string[]
  ): string[] => {
    return tagIDs.filter((ID: string): boolean => {
      if (byID[ID].path.length === 0) return false;

      if (tagIDsBeingEdited.includes(ID)) return true;

      if (
        currentTime >= byID[ID].path[0].time &&
        currentTime <= byID[ID].path[byID[ID].path.length - 1].time
      )
        return true;
      return false;
    });
  }
);

export default getCurrentlyVisibleTagIDs;