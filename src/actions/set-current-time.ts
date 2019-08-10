import { SimpleActionTemplate } from '../types/simple-action-template';

export interface SetCurrentTimePayload {
  time: number;
  isNormalized: boolean;
}

export type SetCurrentTime = SimpleActionTemplate<
  'SET_CURRENT_TIME',
  SetCurrentTimePayload
>;

export const SET_CURRENT_TIME = 'SET_CURRENT_TIME';

export default function setCurrentTime(
  payload: SetCurrentTimePayload
): SetCurrentTime {
  return { type: SET_CURRENT_TIME, payload };
}
