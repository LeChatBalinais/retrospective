import { ActionTemplate } from '~/utils/action-template';
import { makeActionCreator } from '~/utils/make-action-creator';
import { createReducer } from '~/utils/create-reducer';
import { State } from '~/state';

export type ActionID = 'ROUTE_HOME';
export const ACTION_ID = 'ROUTE_HOME';

export type Payload = undefined;

export type Action = ActionTemplate<ActionID>;

export const actionCreator = makeActionCreator<ActionID>(ACTION_ID);

export const reducer = createReducer<ActionID, State, undefined>(ACTION_ID);
