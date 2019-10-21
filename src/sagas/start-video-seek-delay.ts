import { SagaIterator } from '@redux-saga/core';
import { select, put, takeEvery, delay } from 'redux-saga/effects';
import { ACTION_ID as UI_PLAYER_SEEKPREVIEW_TIME_TO_SEEK_VIDEO_AFTER_DELAY } from '~/actions-reducers/saga-start-video-seek-delay';
import { actionCreator as seekDelayEnded } from '~/actions-reducers/saga-video-seek-delay-ended';
import { getLastRequestedStage } from '~/getters/player';

function* saga(): SagaIterator {
  const requestedStage = yield select(getLastRequestedStage);
  yield delay(50);
  yield put(seekDelayEnded({ requestedStage }));
}

export default function* watchIncrementAsync(): SagaIterator {
  yield takeEvery([], saga);
}
