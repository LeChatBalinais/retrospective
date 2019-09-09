import { SimpleActionTemplate } from '~/types/actions/simple-action-template';

export interface VideoSeekingPayload {
  time: number;
}

export type VideoSeeking = SimpleActionTemplate<
  'VIDEO_SEEKING',
  VideoSeekingPayload
>;

export const VIDEO_SEEKING = 'VIDEO_SEEKING';

export function videoSeeking(payload: VideoSeekingPayload): VideoSeeking {
  return { type: VIDEO_SEEKING, payload };
}

export const VideoSeeking = undefined;
