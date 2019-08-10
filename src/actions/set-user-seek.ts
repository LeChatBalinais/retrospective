import { SimpleActionTemplate } from '../types/simple-action-template';

export interface SetUserSeekPayload {
  mode: boolean;
}

export type SetUserSeek = SimpleActionTemplate<
  'SET_USER_SEEK',
  SetUserSeekPayload
>;

export const SET_USER_SEEK = 'SET_USER_SEEK';

export default function setUserSeek(payload: SetUserSeekPayload): SetUserSeek {
  return { type: SET_USER_SEEK, payload };
}
