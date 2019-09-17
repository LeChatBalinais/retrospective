import { ControlsActions } from './controls';
import { VideoActions } from './video';
import { SeekbarActions } from './seekbar';
import { NewTagLayerActions } from './new-tag-layer';
import { AugmentationActions } from './augmentation';
import { PlayerLoaded } from './player-loaded';

export type PlayerActions =
  | ControlsActions
  | VideoActions
  | SeekbarActions
  | NewTagLayerActions
  | PlayerLoaded
  | AugmentationActions;

export * from './controls';
export * from './video';
export * from './seekbar';
export * from './new-tag-layer';
export * from './player-loaded';
export * from './augmentation';
