import { State } from '~/state';
import DEFAULT_STATE from '~/default-state';
import { Reducer } from '~/utils/create-reducer';
import * as saga from './saga';
import * as ui from './ui';
import * as route from './route'

export type Action = saga.Action | ui.Action | route.Action;

type ActionID = saga.ActionID | ui.ActionID | route.ActionID;

type Payload<T extends ActionID> = T extends ui.ActionID
  ? ui.Payload<T>
  : T extends saga.ActionID
  ? saga.Payload<T>
  : T extends route.ActionID
  ? route.Payload<T>
  : undefined;

type ReducersRegister = {
  [P in ActionID]: Reducer<P, State, Payload<P>>;
};

const reducersRegister: ReducersRegister = {
  ...saga.reducersRegister,
  ...ui.reducersRegister,
  ...route.reducersRegister
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
