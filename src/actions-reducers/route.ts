import { State } from '~/state';
import { Reducer } from '~/utils/create-reducer';
import * as home from './route-home';
import * as referenceEditor from './route-reference-editor';
import * as compositionPlayer from './route-composition-player';

export type Action =
  | home.Action
  | referenceEditor.Action
  | compositionPlayer.Action;

export type ActionID =
  | home.ActionID
  | referenceEditor.ActionID
  | compositionPlayer.ActionID;

export type Payload<T> = T extends home.ActionID
  ? home.Payload
  : T extends referenceEditor.ActionID
  ? referenceEditor.Payload
  : T extends compositionPlayer.ActionID
  ? compositionPlayer.Payload
  : undefined;

type ReducersRegister = {
  [P in ActionID]: Reducer<P, State, Payload<P>>;
};

export const reducersRegister: ReducersRegister = {
  ...home.reducer,
  ...referenceEditor.reducer,
  ...compositionPlayer.reducer
};
