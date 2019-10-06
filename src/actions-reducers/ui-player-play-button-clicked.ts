import { ActionTemplate } from '~/utils/action-template';
import { makeActionCreator } from '~/utils/make-action-creator';
import { PlaybackStatus, State } from '~/state';
import createReducer from '~/utils/create-reducer';
import { createPartialReducer } from '~/utils/create-partial-reducer';
import { getPlaybackStatus } from '~/selectors/common';
import { setPlaybackStatus } from '~/reducers/base';

export type ActionID = 'PLAY_BUTTON_CLICKED';
export const ACTION_ID = 'PLAY_BUTTON_CLICKED';

export type Action = ActionTemplate<ActionID>;

export const actionCreator = makeActionCreator<ActionID>(ACTION_ID);

const calculatePlaybackStatus = (
  prevPlaybackStatus: PlaybackStatus
): PlaybackStatus =>
  prevPlaybackStatus === PlaybackStatus.Playing
    ? PlaybackStatus.Paused
    : PlaybackStatus.Playing;

const partialReducers = [
  createPartialReducer(
    getPlaybackStatus,
    setPlaybackStatus,
    calculatePlaybackStatus,
    [getPlaybackStatus]
  )
];

export const reducer = {
  [ACTION_ID]: createReducer<ActionID, State>(partialReducers)
};
