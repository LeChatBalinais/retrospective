import { SimpleActionTemplate } from '~/types/actions/simple-action-template';

export type MouseUpOnAugmentationType = 'MOUSE_UP_ON_AUGMENTATION';
export interface MouseUpOnAugmentationPayload {
  x: number;
  y: number;
}

export type MouseUpOnAugmentation = SimpleActionTemplate<
  MouseUpOnAugmentationType,
  MouseUpOnAugmentationPayload
>;

export const MOUSE_UP_ON_AUGMENTATION = 'MOUSE_UP_ON_AUGMENTATION';

export default function mouseUpOnAugmentation(
  payload: MouseUpOnAugmentationPayload
): MouseUpOnAugmentation {
  return { type: MOUSE_UP_ON_AUGMENTATION, payload };
}
