import { SimpleActionTemplate } from '~/types/actions/simple-action-template';

export type VideoSeekingType = 'VIDEO_SEEKING';

export interface VideoSeekingPayload {
  time: number;
}

export type VideoSeeking = SimpleActionTemplate<
  VideoSeekingType,
  VideoSeekingPayload
>;

export const VIDEO_SEEKING = 'VIDEO_SEEKING';

export function videoSeeking(payload: VideoSeekingPayload): VideoSeeking {
  return { type: VIDEO_SEEKING, payload };
}
