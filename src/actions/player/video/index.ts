import { VideoSeeking } from './video-seeking';
import { VideoSeeked } from './video-seeked';
import { VideoPlayedToTime } from './video-played-to-time';
import { VideoDurationChanged } from './video-duration-changed';

export type VideoActions =
  | VideoSeeking
  | VideoSeeked
  | VideoPlayedToTime
  | VideoDurationChanged;

export * from './video-seeking';
export * from './video-seeked';
export * from './video-played-to-time';
export * from './video-duration-changed';
