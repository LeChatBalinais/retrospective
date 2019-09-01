import { State, Tag } from '../types';

export const getPlayback = ({ player: { playback } }: State): boolean =>
  playback;

export const getUserSeek = ({ player: { userSeek } }: State): boolean =>
  userSeek;

export const getCurrentTime = ({
  footage: { duration },
  player: { currentTimeNormalized }
}: State): number => currentTimeNormalized * duration;

export const getAboutToBeCurrentTime = ({
  footage: { duration },
  player: { requestedTimeNormalized, userSeek, currentTimeNormalized }
}: State): number =>
  userSeek
    ? requestedTimeNormalized * duration
    : currentTimeNormalized * duration;

export const getVideoDuration = ({ footage: { duration } }: State): number =>
  duration;

export const getCurrentNormalizedTime = ({
  player: { currentTimeNormalized }
}: State): number => currentTimeNormalized;

export const getAboutToBeCurrentNormalizedTime = ({
  player: { requestedTimeNormalized, userSeek, currentTimeNormalized }
}: State): number =>
  userSeek ? requestedTimeNormalized : currentTimeNormalized;

export const getVideoURL = ({ footage: { url } }: State): string => url;

export const getTags = ({
  entities: {
    tags: { byID }
  }
}: State): { [ID: string]: Tag } => byID;

export const getTagIDs = ({
  entities: {
    tags: { allIDs }
  }
}: State): string[] => allIDs;

export const getLocalTagIDs = ({
  entities: {
    tags: { byID, allIDs }
  }
}: State): string[] =>
  allIDs.filter((ID: string): boolean => byID[ID].globalID === undefined);

export const getBeingEditedTagIDs = ({
  tagEditor: { tagsBeingEdited }
}: State): string[] => tagsBeingEdited;

export const getVisibleTraceTagIDs = ({
  tagEditor: { tagsWithVisibleTrace }
}: State): string[] => tagsWithVisibleTrace;

export const getCurrentTagID = ({ tagEditor: { currentTag } }: State): string =>
  currentTag;

export const isTagCurrent = (
  { tagEditor: { currentTag } }: State,
  ID: string
): boolean => currentTag === ID;

export const isPlaceNewTagModeOn = ({
  tagEditor: { userIsPlacingNewTag }
}: State): boolean => userIsPlacingNewTag;
