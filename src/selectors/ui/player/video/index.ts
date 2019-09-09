import { State, PlaybackStatus, SeekingStatus, VideoStatus } from '~/types';

export const getTimeSeekTo = ({
  footage: { duration },
  player: { lastRequestedStage }
}: State): number => lastRequestedStage * duration;

export const getVideoURL = ({ footage: { url } }: State): string => url;

export const shouldVideoPlayback = ({
  player: { playbackStatus, seekingStatus }
}: State): boolean =>
  playbackStatus === PlaybackStatus.Playing &&
  seekingStatus === SeekingStatus.NoSeeking;

export const shouldVideoSeek = ({
  player: {
    video: { status: videoStatus },
    seekingStatus
  }
}: State): boolean =>
  videoStatus !== VideoStatus.Seeking &&
  seekingStatus !== SeekingStatus.NoSeeking;
