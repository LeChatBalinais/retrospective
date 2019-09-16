import {
  State,
  Tag,
  VideoStatus,
  SeekingStatus,
  SeekbarStatus,
  PlaneTimePoint,
  PlaybackStatus
} from '~/types';

export const getTag = (
  {
    entities: {
      tags: { byID }
    }
  }: State,
  ID: string
): Tag => byID[ID];

export const isTagCurrent = (
  { tagEditor: { currentTag } }: State,
  ID: string
): boolean => currentTag === ID;

export const isTagLocal = (state: State, ID: string): boolean => {
  const tag = getTag(state, ID);
  if (!tag) return false;
  return tag.globalID === undefined;
};

export const getVideoStatus = ({
  player: {
    video: { status }
  }
}: State): VideoStatus => status;

export const getPlaybackStatus = ({
  player: { playbackStatus }
}: State): PlaybackStatus => playbackStatus;

export const getStageVideoSeekingTo = ({
  player: {
    video: { stageSeekingTo }
  }
}: State): number => stageSeekingTo;

export const getStageVideoAt = ({
  player: {
    video: { stageAt }
  }
}: State): number => stageAt;

export const getSeekingStatus = ({
  player: { seekingStatus }
}: State): SeekingStatus => seekingStatus;

export const getLastRequestedStage = ({
  player: { lastRequestedStage }
}: State): number => lastRequestedStage;

export const getSeekbarStatus = ({
  player: {
    seekbar: { status }
  }
}: State): SeekbarStatus => status;

export const getCurrentTagID = ({ tagEditor: { currentTag } }: State): string =>
  currentTag;

export const getTagPath = (state: State, tagID: string): PlaneTimePoint[] => {
  const tag = getTag(state, tagID);
  return tag ? tag.path : undefined;
};

export const getPlacingNewTagMode = ({
  tagEditor: { userIsPlacingNewTag }
}: State): boolean => userIsPlacingNewTag;
