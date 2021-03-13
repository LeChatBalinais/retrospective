import { createSelector } from 'reselect';
import { TagsByID } from '~/state';
import { getTagBeingEditedIDs } from '~/getters/tag-editor';
import { getTags, getTagIDs } from '~/getters/tags';
import { getTimePlayerAt } from './get-time-player-at';
import { getIDofVideoInReferenceEditor } from '~/getters/location'

const getCurrentlyVisibleTagIDs = createSelector(
  [getTagIDs, getTags, getTimePlayerAt, getTagBeingEditedIDs, getIDofVideoInReferenceEditor],
  (
    tagIDs: string[],
    byID: TagsByID,
    currentTime: number,
    tagIDsBeingEdited: string[],
    videoBeingReferencedID: string
  ): string[] => {
    return tagIDs.filter((ID: string): boolean => {
      const { [ID]: tag } = byID;

      if (tag.videoID !== videoBeingReferencedID)
        return false;

      if (tag.path.length === 0) return false;

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
