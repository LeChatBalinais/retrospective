import { State } from '~/state';
import DEFAULT_STATE from '~/default-state';
import { Reducer } from '~/utils/experimental/create-reducer';
import * as saga from './saga';
import * as ui from './ui';

export type Action = saga.Action | ui.Action;

export type ActionID = saga.ActionID | ui.ActionID;

type Payload<T extends ActionID> = T extends ui.ActionID
  ? ui.Payload<T>
  : T extends saga.ActionID
  ? saga.Payload<T>
  : undefined;

type ReducersRegister = {
  [P in ActionID]: Reducer<P, State, Payload<P>>;
};

export const reducersRegister: ReducersRegister = {
  ...saga.reducersRegister,
  ...ui.reducersRegister
};

const getReducerFromRegister = <T extends Action>(
  register: ReducersRegister,
  action: T
): Reducer<T['type'], State, T['payload']> => register[action.type];

export const reducer = <T extends Action>(
  state: State = DEFAULT_STATE,
  action: T
): State => {
  const actionReducer = getReducerFromRegister(reducersRegister, action);
  if (actionReducer === undefined) return state;
  return actionReducer(state, action);
};
