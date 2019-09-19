import { ControlsActions } from './controls';
import { VideoActions } from './video';
import { SeekbarActions } from './seekbar';
import { NewTagLayerActions } from './new-tag-layer';
import { AugmentationActions } from './augmentation';
import { PlayerLoaded } from './player-loaded';
import { ActiveTagsPanelAction } from './active-tags-panel';
import { CurrentTagPanelAction } from './current-tag-panel';

export type PlayerActions =
  | ControlsActions
  | VideoActions
  | SeekbarActions
  | NewTagLayerActions
  | PlayerLoaded
  | AugmentationActions
  | ActiveTagsPanelAction
  | CurrentTagPanelAction;

export * from './controls';
export * from './video';
export * from './seekbar';
export * from './new-tag-layer';
export * from './player-loaded';
export * from './augmentation';
export * from './active-tags-panel';
export * from './current-tag-panel';
