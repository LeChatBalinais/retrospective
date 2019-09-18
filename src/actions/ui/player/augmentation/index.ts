import { MouseDownOnAugmentation } from './mouse-down-on-augmentation';
import { MouseUpOnAugmentation } from './mouse-up-on-augmentation';
import { MouseMoveOnAugmentation } from './mouse-move-on-augmentation';
import { TagActions } from './tag';

export type AugmentationActions =
  | MouseDownOnAugmentation
  | MouseUpOnAugmentation
  | MouseMoveOnAugmentation
  | TagActions;

export * from './mouse-down-on-augmentation';
export * from './mouse-up-on-augmentation';
export * from './mouse-move-on-augmentation';
export * from './tag';
