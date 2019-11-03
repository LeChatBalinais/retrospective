import { State } from '~/state';
import { Reducer } from '~/utils/experimental/create-reducer';
import * as mouseDown from './ui-player-augmentation-mouse-down';
import * as mouseMove from './ui-player-augmentation-mouse-move';
import * as mouseUp from './ui-player-augmentation-mouse-up';
import * as tagMouseDown from './ui-player-augmentation-tag-mouse-down';
import * as tagMouseUp from './ui-player-augmentation-tag-mouse-up';

export type Action =
  | mouseDown.Action
  | mouseMove.Action
  | mouseUp.Action
  | tagMouseDown.Action
  | tagMouseUp.Action;

export type ActionID =
  | mouseDown.ActionID
  | mouseMove.ActionID
  | mouseUp.ActionID
  | tagMouseDown.ActionID
  | tagMouseUp.ActionID;

export type Payload<T> = T extends mouseDown.ActionID
  ? mouseDown.Payload
  : T extends mouseMove.ActionID
  ? mouseMove.Payload
  : T extends mouseUp.ActionID
  ? mouseUp.Payload
  : T extends tagMouseDown.ActionID
  ? tagMouseDown.Payload
  : T extends tagMouseUp.ActionID
  ? tagMouseUp.Payload
  : undefined;

type ReducersRegister = {
  [P in ActionID]: Reducer<P, State, Payload<P>>;
};

export const reducersRegister: ReducersRegister = {
  ...mouseDown.reducer,
  ...mouseMove.reducer,
  ...mouseUp.reducer,
  ...tagMouseDown.reducer,
  ...tagMouseUp.reducer
};
