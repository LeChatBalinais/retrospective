import { State } from '~/state';
import { Reducer } from '~/utils/experimental/create-reducer';
import * as newTagButtonClicked from './ui-tag-editor-new-tag-button-clicked';
import * as newTagLayerClicked from './ui-tag-editor-new-tag-layer-clicked';

export type Action = newTagButtonClicked.Action | newTagLayerClicked.Action;

export type ActionID =
  | newTagButtonClicked.ActionID
  | newTagLayerClicked.ActionID;

export type Payload<T> = T extends newTagButtonClicked.ActionID
  ? newTagButtonClicked.Payload
  : T extends newTagLayerClicked.ActionID
  ? newTagLayerClicked.Payload
  : undefined;

type ReducersRegister = {
  [P in ActionID]: Reducer<P, State, Payload<P>>;
};

export const reducersRegister: ReducersRegister = {
  ...newTagButtonClicked.reducer,
  ...newTagLayerClicked.reducer
};
