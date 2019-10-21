import { ActionTemplate } from '~/utils/action-template';
import { makeActionCreator } from '~/utils/make-action-creator';

export type ActionID = 'SAGA_START_VIDEO_SEEK_DELAY';
export const ACTION_ID = 'SAGA_START_VIDEO_SEEK_DELAY';

export type Action = ActionTemplate<ActionID>;

export const actionCreator = makeActionCreator<ActionID>(ACTION_ID);
