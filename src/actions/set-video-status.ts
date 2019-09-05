import { SimpleActionTemplate } from '../types/actions/simple-action-template';
import { VideoStatus } from '../types/state';

export interface SetVideoStatusPayload {
  status: VideoStatus;
}

export type SetVideoStatus = SimpleActionTemplate<
  'SET_VIDEO_STATUS',
  SetVideoStatusPayload
>;

export const SET_VIDEO_STATUS = 'SET_VIDEO_STATUS';

export function setVideoStatus(payload: SetVideoStatusPayload): SetVideoStatus {
  return { type: SET_VIDEO_STATUS, payload };
}

export const SetVideoStatusPayload = undefined;
export const SetVideoStatus = undefined;
