import {
  State,
  SeekingStatus,
  VideoStatus,
  PlaybackStatus,
  SeekbarStatus
} from '~/state';

export const isPlaying = ({
  player: { playbackStatus, seekingStatus }
}: State): boolean =>
  playbackStatus === PlaybackStatus.Playing &&
  seekingStatus === SeekingStatus.NoSeeking;

export const getSeekingStatus = ({
  player: { seekingStatus }
}: State): SeekingStatus => seekingStatus;

export const getSeekbarStatus = ({
  player: {
    seekbar: { status }
  }
}: State): SeekbarStatus => status;

export const getPlaybackStatus = ({
  player: { playbackStatus }
}: State): PlaybackStatus => playbackStatus;

export const getLastRequestedStage = ({
  player: { lastRequestedStage }
}: State): number => lastRequestedStage;

export const getStageVideoAt = ({
  player: {
    video: { stageAt }
  }
}: State): number => stageAt;

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

export const getStageSeekPreviewAt = ({
  player: {
    seekPreview: { stageAt }
  }
}: State): number => stageAt;

export const getSeekPreviewStatus = ({
  player: {
    seekPreview: { status }
  }
}: State): VideoStatus => status;

export const getStageSeekPreviewSeekingTo = ({
  player: {
    seekPreview: { stageSeekingTo }
  }
}: State): number => stageSeekingTo;

export const getSeekVideo = ({ player: { seekVideo } }: State): boolean =>
  seekVideo;

export const isDelayOn = ({ player: { delayOn } }: State): boolean => delayOn;

export const isTagHighlighted = (
  { player: { highlightedTagID } }: State,
  ID: string
): boolean => ID !== undefined && ID === highlightedTagID;

export const getHighlightedTagID = ({
  player: { highlightedTagID }
}: State): string => highlightedTagID;
