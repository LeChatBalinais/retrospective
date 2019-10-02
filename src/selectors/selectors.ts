import {
  State,
  Tag,
  PlaybackStatus,
  VideoStatus,
  SeekingStatus
} from '../types/state';

export const getPlayerStatus = ({
  player: { playbackStatus: status }
}: State): boolean => status === PlaybackStatus.Playing;

export const isVideoPlaying = ({
  player: { playbackStatus, seekingStatus }
}: State): boolean => playbackStatus && !seekingStatus;

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
}: State): boolean => status !== SeekingStatus.NoSeeking;

export const getCurrentTime = ({
  footage: { duration },
  player: {
    video: { stageAt: atStage }
  }
}: State): number => atStage * duration;

export const getStageSeekTo = ({
  footage: { duration },
  player: {
    seekingStatus,
    video: {
      status: videoStatus,
      stageAt: atStage,
      stageSeekingTo: stageSeekTo
    }
  }
}: State): number =>
  seekingStatus === SeekingStatus.SeekbarSeeking ||
  videoStatus === VideoStatus.Seeking
    ? stageSeekTo * duration
    : atStage * duration;

export const getVideoDuration = (state: State): number => {
  const {
    footage: { duration }
  } = state;
  return duration;
};

export const getCurrentStage = ({
  player: {
    video: { stageAt: atStage }
  }
}: State): number => atStage;

export const getSeekBarCurrentStage = ({
  player: {
    seekingStatus,
    lastRequestedStage,
    video: { stageAt: stageVideoAt }
  }
}: State): number =>
  seekingStatus === SeekingStatus.SeekbarSeeking
    ? lastRequestedStage
    : stageVideoAt;

export const getAboutToBeCurrentTime = ({
  player: {
    seekingStatus,
    video: {
      status: videoStatus,
      stageAt: atStage,
      stageSeekingTo: stageSeekTo
    }
  }
}: State): number =>
  videoStatus === VideoStatus.Seeking ||
  seekingStatus === SeekingStatus.SeekbarSeeking
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

export const shouldPlayVideo = ({
  player: { playbackStatus, seekingStatus }
}: State): boolean => {
  if (
    playbackStatus === PlaybackStatus.Playing &&
    seekingStatus === SeekingStatus.NoSeeking
  )
    return true;
  return false;
};
