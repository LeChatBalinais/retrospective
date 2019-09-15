import { SimpleActionTemplate } from '~/types/actions/simple-action-template';

export type VideoDurationChangedType = 'VIDEO_DURATION_CHANGED';

export interface VideoDurationChangedPayload {
  duration: number;
}

export type VideoDurationChanged = SimpleActionTemplate<
  VideoDurationChangedType,
  VideoDurationChangedPayload
>;

export const VIDEO_DURATION_CHANGED = 'VIDEO_DURATION_CHANGED';

export function videoDurationChanged(
  payload: VideoDurationChangedPayload
): VideoDurationChanged {
  return { type: VIDEO_DURATION_CHANGED, payload };
}
