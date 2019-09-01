import { createSelector } from 'reselect';
import {
  getTags,
  getCurrentTime,
  getTagIDs,
  getBeingEditedTagIDs
} from './selectors';
import { Tag } from '../types';

const getVisibleTagIDs = createSelector(
  [getTagIDs, getTags, getCurrentTime, getBeingEditedTagIDs],
  (
    tagIDs: string[],
    byID: { [ID: string]: Tag },
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

export default getVisibleTagIDs;
