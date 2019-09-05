import { SimpleActionTemplate } from '../types/actions/simple-action-template';

export interface RemoveTagPayload {
  ID: string;
}

export type RemoveTag = SimpleActionTemplate<'REMOVE_TAG', RemoveTagPayload>;

export const REMOVE_TAG = 'REMOVE_TAG';

export default function removeTag(payload: RemoveTagPayload): RemoveTag {
  return { type: REMOVE_TAG, payload };
}

export const RemoveTagPayload = undefined;
export const RemoveTag = undefined;
