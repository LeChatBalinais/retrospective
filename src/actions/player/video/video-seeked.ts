import { SimpleActionTemplate } from '~/types/actions/simple-action-template';

export type VideoSeeked = SimpleActionTemplate<'VIDEO_SEEKED', {}>;

export const VIDEO_SEEKED = 'VIDEO_SEEKED';

export default function videoSeeked(): VideoSeeked {
  return { type: VIDEO_SEEKED, payload: {} };
}

export const VideoSeeked = undefined;
