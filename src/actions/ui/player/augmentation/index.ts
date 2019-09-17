import { MouseDownOnAugmentation } from './mouse-down-on-augmentation';
import { MouseUpOnAugmentation } from './mouse-up-on-augmentation';

export type AugmentationActions =
  | MouseDownOnAugmentation
  | MouseUpOnAugmentation;

export * from './mouse-down-on-augmentation';
export * from './mouse-up-on-augmentation';
