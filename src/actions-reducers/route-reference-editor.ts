import { ActionTemplate } from '~/utils/action-template';
import { makeActionCreator } from '~/utils/make-action-creator';
import { createReducer } from '~/utils/create-reducer';
import { State } from '~/state';

export type ActionID = 'ROUTE_REFERENCE_EDITOR';
export const ACTION_ID = 'ROUTE_REFERENCE_EDITOR';

export interface Payload {
  videoID: string;
}

export type Action = ActionTemplate<ActionID, Payload>;

export const actionCreator = makeActionCreator<ActionID, Payload>(ACTION_ID);

export const reducer = createReducer<ActionID, State, Payload>(ACTION_ID);
