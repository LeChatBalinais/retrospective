import { SimpleActionTemplate } from '../types/simple-action-template';

export interface SetRequestedNormalizedTimePayload {
  time: number;
}

export type SetRequestedNormalizedTime = SimpleActionTemplate<
  'SET_REQUESTED_NORMALIZED_TIME',
  SetRequestedNormalizedTimePayload
>;

export const SET_REQUESTED_NORMALIZED_TIME = 'SET_REQUESTED_NORMALIZED_TIME';

export default function setRequestedTime(
  payload: SetRequestedNormalizedTimePayload
): SetRequestedNormalizedTime {
  return { type: SET_REQUESTED_NORMALIZED_TIME, payload };
}
