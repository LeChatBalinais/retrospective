import { ActionTemplate } from '~/types/action-template';

export type VideoSeekedType = 'VIDEO_SEEKED';

export type VideoSeeked = ActionTemplate<'VIDEO_SEEKED', {}>;

export const VIDEO_SEEKED = 'VIDEO_SEEKED';

export function videoSeeked(): VideoSeeked {
  return { type: VIDEO_SEEKED, payload: {} };
}
