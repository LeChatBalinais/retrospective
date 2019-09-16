import { ControlsActions } from './controls';
import { VideoActions } from './video';
import { SeekbarActions } from './seekbar';
import { NewTagLayerActions } from './new-tag-layer';

export type PlayerActions =
  | ControlsActions
  | VideoActions
  | SeekbarActions
  | NewTagLayerActions;

export * from './controls';
export * from './video';
export * from './seekbar';
export * from './new-tag-layer';
