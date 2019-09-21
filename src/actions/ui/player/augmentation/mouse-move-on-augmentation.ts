import { ActionTemplate } from '~/types/action-template';

export type MouseMoveOnAugmentationType = 'MOUSE_MOVE_ON_AUGMENTATION';
export interface MouseMoveOnAugmentationPayload {
  x: number;
  y: number;
}

export type MouseMoveOnAugmentation = ActionTemplate<
  MouseMoveOnAugmentationType,
  MouseMoveOnAugmentationPayload
>;

export const MOUSE_MOVE_ON_AUGMENTATION = 'MOUSE_MOVE_ON_AUGMENTATION';

export default function mouseMoveOnAugmentation(
  payload: MouseMoveOnAugmentationPayload
): MouseMoveOnAugmentation {
  return { type: MOUSE_MOVE_ON_AUGMENTATION, payload };
}
