import { State } from '~/state';
import { Reducer } from '~/utils/experimental/create-reducer';
import * as seeked from './ui-player-seekpreview-seeked';
import * as seeking from './ui-player-seekpreview-seeking';

export type Action = seeked.Action | seeking.Action;

export type ActionID = seeked.ActionID | seeking.ActionID;

export type Payload<T> = T extends seeked.ActionID
  ? seeked.Payload
  : T extends seeking.ActionID
  ? seeking.Payload
  : undefined;

type ReducersRegister = {
  [P in ActionID]: Reducer<P, State, Payload<P>>;
};

export const reducersRegister: ReducersRegister = {
  ...seeked.reducer,
  ...seeking.reducer
};
