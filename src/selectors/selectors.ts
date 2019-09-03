import { State, Tag, PlaybackStatus, VideoStatus } from '../types';

export const getPlayerStatus = ({
  player: { playbackStatus: status }
}: State): boolean => status === PlaybackStatus.Playing;

export const getPlayerStatusN = ({
  player: { playbackStatus: status }
}: State): PlaybackStatus => status;

export const getUserSeek = ({
  player: {
    video: { status }
  }
}: State): boolean => status === VideoStatus.Seeking;

export const getCurrentTime = ({
  footage: { duration },
  player: {
    video: { atStage }
  }
}: State): number => atStage * duration;

export const getStageSeekTo = ({
  footage: { duration },
  player: {
    video: { status, atStage, stageSeekTo }
  }
}: State): number =>
  status === VideoStatus.Seeking ? stageSeekTo * duration : atStage * duration;

export const getVideoDuration = ({ footage: { duration } }: State): number =>
  duration;

export const getCurrentStage = ({
  player: {
    video: { atStage }
  }
}: State): number => atStage;

export const getAboutToBeCurrentTime = ({
  player: {
    video: { status, atStage, stageSeekTo }
  }
}: State): number => (status === VideoStatus.Seeking ? stageSeekTo : atStage);

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
