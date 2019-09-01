import { SimpleActionTemplate } from '../types/actions/simple-action-template';

export interface SetCurrentNormalizedTimePayload {
  time: number;
}

export type SetCurrentNormalizedTime = SimpleActionTemplate<
  'SET_CURRENT_NORMALIZED_TIME',
  SetCurrentNormalizedTimePayload
>;

export const SET_CURRENT_NORMALIZED_TIME = 'SET_CURRENT_NORMALIZED_TIME';

export default function setCurrentTime(
  payload: SetCurrentNormalizedTimePayload
): SetCurrentNormalizedTime {
  return { type: SET_CURRENT_NORMALIZED_TIME, payload };
}
