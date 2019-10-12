import { ActionTemplate } from '~/utils/action-template';
import { makeActionCreator } from '~/utils/make-action-creator';

export type ActionID = 'PLAYER_LOADED';
export const ACTION_ID = 'PLAYER_LOADED';

export type Action = ActionTemplate<ActionID>;

export const actionCreator = makeActionCreator<ActionID>(ACTION_ID);
