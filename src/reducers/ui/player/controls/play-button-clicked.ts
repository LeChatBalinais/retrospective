import { PLAY_BUTTON_CLICKED } from '~/actions';
import { PlaybackStatus } from '~/types';
import createReducer from '~/utils/create-reducer';
import { createPartialReducer } from '~/utils/create-partial-reducer';
import { getPlaybackStatus } from '~/selectors/common';
import { setPlaybackStatus } from '~/reducers/base';

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

export default {
  actionType: PLAY_BUTTON_CLICKED,
  reducer: createReducer(partialReducers)
};
