import { State } from '~/state';
import { Reducer } from '~/utils/experimental/create-reducer';
import * as rowClicked from './ui-tag-list-row-clicked';
import * as deleteButtonClicked from './ui-tag-list-row-delete-button-clicked';
import * as saveButtonClicked from './ui-tag-list-row-save-button-clicked';

export type Action =
  | rowClicked.Action
  | deleteButtonClicked.Action
  | saveButtonClicked.Action;

export type ActionID =
  | rowClicked.ActionID
  | deleteButtonClicked.ActionID
  | saveButtonClicked.ActionID;

export type Payload<T> = T extends rowClicked.ActionID
  ? rowClicked.Payload
  : T extends deleteButtonClicked.ActionID
  ? deleteButtonClicked.Payload
  : T extends saveButtonClicked.ActionID
  ? saveButtonClicked.Payload
  : undefined;

type ReducersRegister = {
  [P in ActionID]: Reducer<P, State, Payload<P>>;
};

export const reducersRegister: ReducersRegister = {
  ...rowClicked.reducer,
  ...deleteButtonClicked.reducer,
  ...saveButtonClicked.reducer
};
