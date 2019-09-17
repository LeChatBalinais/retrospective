import {
  State,
  Tag,
  VideoStatus,
  SeekingStatus,
  SeekbarStatus,
  PlaneTimePoint,
  PlaybackStatus,
  Tags,
  TagsByID
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

export const getTimeVideoAt = ({
  footage: { duration },
  player: {
    video: { stageAt }
  }
}: State): number => stageAt * duration;

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

export const getTagGlobalID = (state: State, tagID: string): string => {
  const tag = getTag(state, tagID);
  return tag ? tag.globalID : undefined;
};

export const getPlacingNewTagMode = ({
  tagEditor: { userIsPlacingNewTag }
}: State): boolean => userIsPlacingNewTag;

export const getTags = ({ entities: { tags } }: State): Tags => tags;

export const getTagBeingEditedID = ({
  tagEditor: { tagsBeingEdited }
}: State): string =>
  tagsBeingEdited.length === 0 ? undefined : tagsBeingEdited[0];

export const getTagBeingEdited = (state: State): Tag => {
  const {
    tagEditor: { tagsBeingEdited }
  } = state;
  return state.tagEditor.tagsBeingEdited.length === 0
    ? undefined
    : getTag(state, tagsBeingEdited[0]);
};

export const getTagsByID = ({
  entities: {
    tags: { byID }
  }
}: State): TagsByID => byID;
