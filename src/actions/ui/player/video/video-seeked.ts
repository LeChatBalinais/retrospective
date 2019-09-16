import { SimpleActionTemplate } from '~/types/actions/simple-action-template';

export type VideoSeekedType = 'VIDEO_SEEKED';

export type VideoSeeked = SimpleActionTemplate<'VIDEO_SEEKED', {}>;

export const VIDEO_SEEKED = 'VIDEO_SEEKED';

export function videoSeeked(): VideoSeeked {
  return { type: VIDEO_SEEKED, payload: {} };
}
