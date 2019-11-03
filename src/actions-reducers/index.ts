import { State } from '~/state';
import DEFAULT_STATE from '~/default-state';
import { Reducer } from '~/utils/experimental/create-reducer';
import * as saga from './saga';
import * as ui from './ui';
import * as uiNewTabButtonClicked from './ui-new-tag-button-clicked';
import * as uiPlayerControlsPlayButtonClicked from './ui-player-play-button-clicked';
import * as uiPlayerNewTagLayerClicked from './ui-player-new-tag-layer-clicked';

export type Action =
  | saga.Action
  | ui.Action
  | uiNewTabButtonClicked.Action
  | uiPlayerControlsPlayButtonClicked.Action
  | uiPlayerNewTagLayerClicked.Action;

type Payload<T extends Action['type']> = T extends ui.ActionID
  ? ui.Payload<T>
  : T extends saga.ActionID
  ? saga.Payload<T>
  : Action['payload'];

type ReducersRegister = {
  [P in Action['type']]: Reducer<P, State, Payload<P>>;
};

export const reducersRegister: ReducersRegister = {
  ...saga.reducersRegister,
  ...ui.reducersRegister,
  ...uiNewTabButtonClicked.reducer,
  ...uiPlayerControlsPlayButtonClicked.reducer,
  ...uiPlayerNewTagLayerClicked.reducer
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
