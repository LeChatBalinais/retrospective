import { State, SeekingStatus, VideoStatus, PlaybackStatus } from '~/state';

export const getStageVideoAt = ({
  player: {
    video: { stageAt }
  }
}: State): number => stageAt;

export const isPlaying = ({
  player: { playbackStatus, seekingStatus }
}: State): boolean =>
  playbackStatus && seekingStatus === SeekingStatus.NoSeeking;

export const getSeekingStatus = ({
  player: { seekingStatus }
}: State): SeekingStatus => seekingStatus;

export const getPlaybackStatus = ({
  player: { playbackStatus }
}: State): PlaybackStatus => playbackStatus;

export const getVideoStatus = ({
  player: {
    video: { status }
  }
}: State): VideoStatus => status;

export const getLastRequestedStage = ({
  player: { lastRequestedStage }
}: State): number => lastRequestedStage;
