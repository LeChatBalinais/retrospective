import { State, Tag, VideoStatus } from '~/types';

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

export const getStageVideoSeekingTo = ({
  player: {
    video: { stageSeekingTo }
  }
}: State): number => stageSeekingTo;
