import { ActionTemplate } from '~/utils/action-template';
import { makeActionCreator } from '~/utils/make-action-creator';
import { State, VideoStatus } from '~/state';
import createReducer from '~/utils/create-reducer';
import { getVideoStatus } from '~/getters/player';
import { setVideoStatus } from '~/setters/player';
import { createPartialReducer } from '~/utils/create-partial-reducer';

export type ActionID = 'UI_PLAYER_VIDEO_PAUSED';
export const ACTION_ID: ActionID = 'UI_PLAYER_VIDEO_PAUSED';

export type Action = ActionTemplate<ActionID>;

export const actionCreator = makeActionCreator<ActionID>(ACTION_ID);

const calculateVideoStatus = (): VideoStatus => VideoStatus.Paused;

const partialReducers = [
  createPartialReducer(getVideoStatus, setVideoStatus, calculateVideoStatus)
];

export const reducer = {
  [ACTION_ID]: createReducer<ActionID, State>(partialReducers)
};
