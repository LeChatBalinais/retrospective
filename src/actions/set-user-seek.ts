import { SimpleActionTemplate } from '../types/actions/simple-action-template';
import { SeekingStatus } from '../types/state';

export interface SetUserSeekPayload {
  status: SeekingStatus;
}

export type SetUserSeek = SimpleActionTemplate<
  'SET_USER_SEEK',
  SetUserSeekPayload
>;

export const SET_USER_SEEK = 'SET_USER_SEEK';

export default function setUserSeek(payload: SetUserSeekPayload): SetUserSeek {
  return { type: SET_USER_SEEK, payload };
}

export const SetUserSeekPayload = undefined;
export const SetUserSeek = undefined;
