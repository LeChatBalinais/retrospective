import { ControlsActions } from './controls';
import { VideoActions } from './video';
import { SeekbarActions } from './seekbar';

export type PlayerActions = ControlsActions | VideoActions | SeekbarActions;

export * from './controls';
export * from './video';
export * from './seekbar';
