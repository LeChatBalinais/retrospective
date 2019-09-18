import { SimpleActionTemplate } from '~/types/actions/simple-action-template';

export type MouseDownOnTagType = 'MOUSE_DOWN_ON_TAG';

export interface MouseDownOnTagPayload {
  tagID: string;
}

export type MouseDownOnTag = SimpleActionTemplate<
  MouseDownOnTagType,
  MouseDownOnTagPayload
>;

export const MOUSE_DOWN_ON_TAG = 'MOUSE_DOWN_ON_TAG';

export default function mouseDownOnTag(
  payload: MouseDownOnTagPayload
): MouseDownOnTag {
  return { type: MOUSE_DOWN_ON_TAG, payload };
}
