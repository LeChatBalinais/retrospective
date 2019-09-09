import { SimpleActionTemplate } from '~/types/actions/simple-action-template';

export interface VideoDurationChangedPayload {
  duration: number;
}

export type VideoDurationChanged = SimpleActionTemplate<
  'VIDEO_DURATION_CHANGED',
  VideoDurationChangedPayload
>;

export const VIDEO_DURATION_CHANGED = 'VIDEO_DURATION_CHANGED';

export function videoDurationChanged(
  payload: VideoDurationChangedPayload
): VideoDurationChanged {
  return { type: VIDEO_DURATION_CHANGED, payload };
}

export const VideoDurationChanged = undefined;
