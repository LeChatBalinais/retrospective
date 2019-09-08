import {
  State,
  Tag,
  PlaybackStatus,
  VideoStatus,
  SeekingStatus,
  SeekbarStatus
} from '../types';

export const getPlayerStatus = ({
  player: { playbackStatus: status }
}: State): boolean => status === PlaybackStatus.Playing;

export const getPlayerStatusN = ({
  player: { playbackStatus: status }
}: State): PlaybackStatus => status;

export const getVideoStatus = ({
  player: {
    video: { status }
  }
}: State): VideoStatus => status;

export const getUserSeek = ({
  player: { seekingStatus: status }
}: State): boolean => status === SeekingStatus.Seeking;

export const getCurrentTime = ({
  footage: { duration },
  player: {
    video: { atStage }
  }
}: State): number => atStage * duration;

export const getStageSeekTo = ({
  footage: { duration },
  player: {
    seekingStatus,
    video: { status: videoStatus, atStage, stageSeekingTo: stageSeekTo }
  }
}: State): number =>
  seekingStatus === SeekingStatus.Seeking || videoStatus === VideoStatus.Seeking
    ? stageSeekTo * duration
    : atStage * duration;

export const getVideoDuration = ({ footage: { duration } }: State): number =>
  duration;

export const getCurrentStage = ({
  player: {
    video: { atStage }
  }
}: State): number => atStage;

export const getSeekBarCurrentStage = ({
  player: {
    seekingStatus,
    lastRequestedStage,
    video: { atStage: videoAtStage }
  }
}: State): number =>
  seekingStatus === SeekingStatus.Seeking ? lastRequestedStage : videoAtStage;

export const getAboutToBeCurrentTime = ({
  player: {
    seekingStatus,
    video: { status: videoStatus, atStage, stageSeekingTo: stageSeekTo }
  }
}: State): number =>
  videoStatus === VideoStatus.Seeking || seekingStatus === SeekingStatus.Seeking
    ? stageSeekTo
    : atStage;

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
