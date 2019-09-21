import { ActionTemplate } from '~/types/action-template';

export type MouseUpOnTagType = 'MOUSE_UP_ON_TAG';

export type MouseUpOnTag = ActionTemplate<MouseUpOnTagType, {}>;

export const MOUSE_UP_ON_TAG = 'MOUSE_UP_ON_TAG';

export default function mouseUpOnTag(): MouseUpOnTag {
  return { type: MOUSE_UP_ON_TAG, payload: {} };
}
