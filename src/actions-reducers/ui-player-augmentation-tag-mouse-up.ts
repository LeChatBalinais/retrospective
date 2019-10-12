import { ActionTemplate } from '~/utils/action-template';
import { State, PlaybackStatus } from '~/state';
import createReducer from '~/utils/create-reducer';
import { createPartialReducer } from '~/utils/create-partial-reducer';
import { getPlaybackStatus } from '~/getters/player';
import { setPlaybackStatus } from '~/setters/player';
import { makeActionCreator } from '~/utils/make-action-creator';

export type ActionID = 'MOUSE_UP_ON_TAG';
export const ACTION_ID = 'MOUSE_UP_ON_TAG';

export type Action = ActionTemplate<ActionID>;

export const actionCreator = makeActionCreator<ActionID>(ACTION_ID);

const calculatePlaybackStatus = (): PlaybackStatus => PlaybackStatus.Paused;

const partialReducers = [
  createPartialReducer(
    getPlaybackStatus,
    setPlaybackStatus,
    calculatePlaybackStatus
  )
];

export const reducer = {
  [ACTION_ID]: createReducer<ActionID, State>(partialReducers)
};
