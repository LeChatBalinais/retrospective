import { ActionTemplate } from '~/utils/action-template';
import { makeActionCreator } from '~/utils/make-action-creator';
import { createReducer } from '~/utils/create-reducer';
import { State } from '~/state';

export type ActionID = 'UI_PLAYER_CREATED_FOR_VIDEO_OF_ID';
export const ACTION_ID = 'UI_PLAYER_CREATED_FOR_VIDEO_OF_ID';

export interface Payload { ID: string };

export type Action = ActionTemplate<ActionID, Payload>;

export const actionCreator = makeActionCreator<ActionID, Payload>(ACTION_ID);

export const reducer = createReducer<ActionID, State, Payload>(ACTION_ID);
