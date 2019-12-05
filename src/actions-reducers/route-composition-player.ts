import { ActionTemplate } from '~/utils/action-template';
import { makeActionCreator } from '~/utils/make-action-creator';
import { createReducer } from '~/utils/create-reducer';
import { State } from '~/state';

export type ActionID = 'ROUTE_COMPOSITION_PLAYER';
export const ACTION_ID = 'ROUTE_COMPOSITION_PLAYER';

export interface Payload {
  compositionID: string;
}

export type Action = ActionTemplate<ActionID, Payload>;

export const actionCreator = makeActionCreator<ActionID, Payload>(ACTION_ID);

export const reducer = createReducer<ActionID, State, Payload>(ACTION_ID);
