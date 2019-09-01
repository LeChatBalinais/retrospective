import { createSelector, OutputParametricSelector } from 'reselect';
import makeGetTag from './get-tag';
import { State, Tag } from '../types';
import TagInfo from '../types/selectors';
import {
  getVisibleTraceTagIDs,
  getBeingEditedTagIDs,
  getCurrentTagID
} from './selectors';

function getAppearsAt(tag: Tag): number {
  if (tag === undefined) return undefined;

  const { path } = tag;

  if (path.length === 0) return undefined;

  const [{ time: appearsAt }] = path;

  return appearsAt;
}

function getDisappearsAt(tag: Tag): number {
  if (tag === undefined) return undefined;

  const { path } = tag;

  if (path.length === 0) return undefined;

  const {
    length: l,
    [l - 1]: { time: disappearsAt }
  } = path;

  return disappearsAt;
}

const makeGetTagInfo = (): OutputParametricSelector<
  State,
  string,
  TagInfo,
  (
    res: Tag,
    visibleTraceTagIDs: string[],
    beingEditedTagIDs: string[],
    ID: string
  ) => TagInfo
> => {
  const getTag = makeGetTag();

  return createSelector(
    [
      getTag,
      getVisibleTraceTagIDs,
      getBeingEditedTagIDs,
      getCurrentTagID,
      (state: State, ID: string): string => ID
    ],
    (
      tag: Tag,
      visibleTraceTagIDs: string[],
      beingEditedTagIDs: string,
      currentTagID: string,
      ID: string
    ): TagInfo => {
      return {
        name: ID,
        appearsAt: getAppearsAt(tag),
        disapearsAt: getDisappearsAt(tag),
        traceIsVisible: visibleTraceTagIDs.includes(ID),
        isEdited: beingEditedTagIDs.includes(ID),
        isCurrent: currentTagID === ID,
        path: tag.path
      };
    }
  );
};

export default makeGetTagInfo;
