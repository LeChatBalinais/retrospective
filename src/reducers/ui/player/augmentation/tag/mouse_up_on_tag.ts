import { MOUSE_UP_ON_TAG } from '~/actions';
import { MouseUpOnTagType, State, PlaybackStatus } from '~/types';
import createReducer from '~/utils/create-reducer';
import { createPartialReducer } from '~/utils/create-partial-reducer';
import { getPlaybackStatus } from '~/selectors/common';
import { setPlaybackStatus } from '~/reducers/base';

const calculatePlaybackStatus = (): PlaybackStatus => PlaybackStatus.Paused;

const partialReducers = [
  createPartialReducer(
    getPlaybackStatus,
    setPlaybackStatus,
    calculatePlaybackStatus
  )
];

export default {
  actionType: MOUSE_UP_ON_TAG,
  reducer: createReducer<MouseUpOnTagType, State>(partialReducers)
};
