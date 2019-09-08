import { VideoSeeking } from './video-seeking';
import { VideoSeeked } from './video-seeked';

export type VideoActions = VideoSeeking | VideoSeeked;

export * from './video-seeking';
export * from './video-seeked';
