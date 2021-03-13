import { State } from '~/state';
import { Reducer } from '~/utils/create-reducer';
import * as video from './ui-player-video';
import * as seekpreview from './ui-player-seekpreview';
import * as seekbar from './ui-player-seekbar';
import * as augmentation from './ui-player-augmentation';
import * as controls from './ui-player-controls';
import * as createdForVideoOfID from './ui-player-created-for-video-of-id';

export type Action =
  | video.Action
  | seekpreview.Action
  | seekbar.Action
  | augmentation.Action
  | controls.Action
  | createdForVideoOfID.Action;

export type ActionID =
  | video.ActionID
  | seekpreview.ActionID
  | seekbar.ActionID
  | augmentation.ActionID
  | controls.ActionID
  | createdForVideoOfID.ActionID;

export type Payload<T> = T extends video.ActionID
  ? video.Payload<T>
  : T extends seekpreview.ActionID
  ? seekpreview.Payload<T>
  : T extends seekbar.ActionID
  ? seekbar.Payload<T>
  : T extends augmentation.ActionID
  ? augmentation.Payload<T>
  : T extends controls.ActionID
  ? controls.Payload<T>
  : T extends createdForVideoOfID.ActionID
  ? createdForVideoOfID.Payload
  : undefined;

type ReducersRegister = {
  [P in ActionID]: Reducer<P, State, Payload<P>>;
};

export const reducersRegister: ReducersRegister = {
  ...video.reducersRegister,
  ...seekpreview.reducersRegister,
  ...seekbar.reducersRegister,
  ...augmentation.reducersRegister,
  ...controls.reducersRegister,
  ...createdForVideoOfID.reducer
};
