import { SimpleActionTemplate } from '../types/simple-action-template';

export interface SeekToTagPayload {
  ID: string;
}

export type SeekToTag = SimpleActionTemplate<'SEEK_TO_TAG', SeekToTagPayload>;

export const SEEK_TO_TAG = 'SEEK_TO_TAG';

export default function seekToTag(payload: SeekToTagPayload): SeekToTag {
  return { type: SEEK_TO_TAG, payload };
}
