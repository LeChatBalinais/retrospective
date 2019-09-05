import { SimpleActionTemplate } from '../types/actions/simple-action-template';

export interface SetPlaybackPayload {
  playback: boolean;
}

export type SetPlayback = SimpleActionTemplate<
  'SET_PLAYBACK',
  SetPlaybackPayload
>;

export const SET_PLAYBACK = 'SET_PLAYBACK';

export default function setPlayback(payload: SetPlaybackPayload): SetPlayback {
  return { type: SET_PLAYBACK, payload };
}

export const SetPlaybackPayload = undefined;
export const SetPlayback = undefined;
