import { ActionTemplate } from '~/utils/action-template';
import { makeActionCreator } from '~/utils/make-action-creator';
import { createReducer } from '~/utils/experimental/create-reducer';
import { State } from '~/state';

export type ActionID = 'UI_TAG_LIST_ROW_DELETE_BUTTON_CLICKED';
export const ACTION_ID = 'UI_TAG_LIST_ROW_DELETE_BUTTON_CLICKED';

export interface Payload {
  tagID: string;
}

export type Action = ActionTemplate<ActionID, Payload>;

export const actionCreator = makeActionCreator<ActionID, Payload>(ACTION_ID);

export const reducer = createReducer<ActionID, State, Payload>(ACTION_ID);
