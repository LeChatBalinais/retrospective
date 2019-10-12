import {
  State,
  SeekingStatus,
  VideoStatus,
  PlaybackStatus,
  SeekbarStatus
} from '~/state';

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

export const getSeekbarStatus = ({
  player: {
    seekbar: { status }
  }
}: State): SeekbarStatus => status;

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

export const getStageVideoSeekingTo = ({
  player: {
    video: { stageSeekingTo }
  }
}: State): number => stageSeekingTo;
