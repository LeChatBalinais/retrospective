import { SimpleActionTemplate } from '~/types/actions/simple-action-template';

export type MouseUpOnTagType = 'MOUSE_UP_ON_TAG';

export type MouseUpOnTag = SimpleActionTemplate<MouseUpOnTagType, {}>;

export const MOUSE_UP_ON_TAG = 'MOUSE_UP_ON_TAG';

export default function mouseUpOnTag(): MouseUpOnTag {
  return { type: MOUSE_UP_ON_TAG, payload: {} };
}
