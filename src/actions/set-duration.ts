import { SimpleActionTemplate } from '../types/actions/simple-action-template';

export interface SetDurationPayload {
  duration: number;
}

export type SetDuration = SimpleActionTemplate<
  'SET_DURATION',
  SetDurationPayload
>;

export const SET_DURATION = 'SET_DURATION';

export default function setDuration(payload: SetDurationPayload): SetDuration {
  return { type: SET_DURATION, payload };
}
