import { ActionTemplate } from '~/types/action-template';

export type MouseDownOnAugmentationType = 'MOUSE_DOWN_ON_AUGMENTATION';

export type MouseDownOnAugmentation = ActionTemplate<
  MouseDownOnAugmentationType,
  {}
>;

export const MOUSE_DOWN_ON_AUGMENTATION = 'MOUSE_DOWN_ON_AUGMENTATION';

export default function mouseDownOnAugmentation(): MouseDownOnAugmentation {
  return { type: MOUSE_DOWN_ON_AUGMENTATION, payload: {} };
}
