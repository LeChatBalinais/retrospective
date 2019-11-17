import { State } from '~/state';
import { Reducer } from '~/utils/create-reducer';
import * as mouseEnter from './ui-tag-mouse-enter';
import * as mouseOut from './ui-tag-mouse-out';

export type Action = mouseEnter.Action | mouseOut.Action;

export type ActionID = mouseEnter.ActionID | mouseOut.ActionID;

export type Payload<T> = T extends mouseEnter.ActionID
  ? mouseEnter.Payload
  : T extends mouseOut.ActionID
  ? mouseOut.Payload
  : undefined;

type ReducersRegister = {
  [P in ActionID]: Reducer<P, State, Payload<P>>;
};

export const reducersRegister: ReducersRegister = {
  ...mouseEnter.reducer,
  ...mouseOut.reducer
};
