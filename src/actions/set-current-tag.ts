import { SimpleActionTemplate } from '../types/actions/simple-action-template';

export interface SetCurrentTagPayload {
  ID: string;
}

export type SetCurrentTag = SimpleActionTemplate<
  'SET_CURRENT_TAG',
  SetCurrentTagPayload
>;

export const SET_CURRENT_TAG = 'SET_CURRENT_TAG';

export default function setCurrentTag(
  payload: SetCurrentTagPayload
): SetCurrentTag {
  return { type: SET_CURRENT_TAG, payload };
}

export const SetCurrentTagPayload = undefined;
export const SetCurrentTag = undefined;
