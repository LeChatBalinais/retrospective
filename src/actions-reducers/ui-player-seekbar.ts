import { State } from '~/state';
import { Reducer } from '~/utils/experimental/create-reducer';
import * as mouseDown from './ui-player-seekbar-mouse-down';
import * as mouseMoveDuringSeeking from './ui-player-seekbar-mouse-move-during-seeking';
import * as mouseUpDuringSeeking from './ui-player-seekbar-mouse-up-during-seeking';

export type Action =
  | mouseDown.Action
  | mouseMoveDuringSeeking.Action
  | mouseUpDuringSeeking.Action;

export type ActionID =
  | mouseDown.ActionID
  | mouseMoveDuringSeeking.ActionID
  | mouseUpDuringSeeking.ActionID;

export type Payload<T> = T extends mouseDown.ActionID
  ? mouseDown.Payload
  : T extends mouseMoveDuringSeeking.ActionID
  ? mouseMoveDuringSeeking.Payload
  : T extends mouseUpDuringSeeking.ActionID
  ? mouseUpDuringSeeking.Payload
  : undefined;

type ReducersRegister = {
  [P in ActionID]: Reducer<P, State, Payload<P>>;
};

export const reducersRegister: ReducersRegister = {
  ...mouseDown.reducer,
  ...mouseMoveDuringSeeking.reducer,
  ...mouseUpDuringSeeking.reducer
};
