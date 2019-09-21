import { ActionTemplate } from '~/types/action-template';

export type MouseUpOnAugmentationType = 'MOUSE_UP_ON_AUGMENTATION';
export interface MouseUpOnAugmentationPayload {
  x: number;
  y: number;
}

export type MouseUpOnAugmentation = ActionTemplate<
  MouseUpOnAugmentationType,
  MouseUpOnAugmentationPayload
>;

export const MOUSE_UP_ON_AUGMENTATION = 'MOUSE_UP_ON_AUGMENTATION';

export default function mouseUpOnAugmentation(
  payload: MouseUpOnAugmentationPayload
): MouseUpOnAugmentation {
  return { type: MOUSE_UP_ON_AUGMENTATION, payload };
}
