import { SimpleActionTemplate } from '~/types/actions/simple-action-template';

export type VideoPlayedToTimeType = 'VIDEO_PLAYED_TO_TIME';

export interface VideoPlayedToTimePayload {
  time: number;
}

export type VideoPlayedToTime = SimpleActionTemplate<
  VideoPlayedToTimeType,
  VideoPlayedToTimePayload
>;

export const VIDEO_PLAYED_TO_TIME = 'VIDEO_PLAYED_TO_TIME';

export function videoPlayedToTime(
  payload: VideoPlayedToTimePayload
): VideoPlayedToTime {
  return { type: VIDEO_PLAYED_TO_TIME, payload };
}
