import { SimpleActionTemplate } from '../types/actions/simple-action-template';

export interface SaveTagPayload {
  ID: string;
}

export type SaveTag = SimpleActionTemplate<'SAVE_TAG', SaveTagPayload>;

export const SAVE_TAG = 'SAVE_TAG';

export default function saveTag(payload: SaveTagPayload): SaveTag {
  return { type: SAVE_TAG, payload };
}

export const SaveTagPayload = undefined;
export const SaveTag = undefined;
