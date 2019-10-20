import { SagaIterator } from '@redux-saga/core';
import { select, put, takeEvery, delay } from 'redux-saga/effects';
import { ACTION_ID as UI_PLAYER_SEEKPREVIEW_SEEKED } from '~/actions-reducers/ui-player-seekpreview-seeked';
import { actionCreator as seekDelayEnded } from '~/actions-reducers/saga-video-seek-delay-ended';
import {
  getSeekPreviewStatus,
  getLastRequestedStage,
  getStageSeekPreviewAt
} from '~/getters/player';
import { VideoStatus } from '~/state';
import { timeIsCloseEnough } from '~/utils/time-is-close-enough';

function* saga(): SagaIterator {
  const requestedStage = yield select(getLastRequestedStage);
  yield delay(50);
  const seekPreviewStatus = yield select(getSeekPreviewStatus);
  const lastRequestedStage = yield select(getLastRequestedStage);
  const stageSeekpreviewAt = yield select(getStageSeekPreviewAt);
  if (
    seekPreviewStatus !== VideoStatus.Seeking &&
    timeIsCloseEnough(lastRequestedStage, stageSeekpreviewAt) &&
    timeIsCloseEnough(requestedStage, lastRequestedStage)
  )
    yield put(seekDelayEnded(requestedStage));
}

export default function* watchIncrementAsync(): SagaIterator {
  yield takeEvery(UI_PLAYER_SEEKPREVIEW_SEEKED, saga);
}
