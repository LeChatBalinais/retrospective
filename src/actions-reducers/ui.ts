import { State } from '~/state';
import { Reducer } from '~/utils/experimental/create-reducer';
import * as player from './ui-player';
import * as tagListRow from './ui-tag-list-row';
import * as currentTagPanel from './ui-current-tag-panel';
import * as tag from './ui-tag';
import * as tagEditor from './ui-tag-editor';

export type Action =
  | player.Action
  | tagListRow.Action
  | currentTagPanel.Action
  | tag.Action
  | tagEditor.Action;

export type ActionID =
  | player.ActionID
  | tagListRow.ActionID
  | currentTagPanel.ActionID
  | tag.ActionID
  | tagEditor.ActionID;

export type Payload<T> = T extends player.ActionID
  ? player.Payload<T>
  : T extends tagListRow.ActionID
  ? tagListRow.Payload<T>
  : T extends currentTagPanel.ActionID
  ? currentTagPanel.Payload<T>
  : T extends tag.ActionID
  ? tag.Payload<T>
  : T extends tagEditor.ActionID
  ? tagEditor.Payload<T>
  : undefined;

type ReducersRegister = {
  [P in ActionID]: Reducer<P, State, Payload<P>>;
};

export const reducersRegister: ReducersRegister = {
  ...player.reducersRegister,
  ...tagListRow.reducersRegister,
  ...currentTagPanel.reducersRegister,
  ...tag.reducersRegister,
  ...tagEditor.reducersRegister
};
