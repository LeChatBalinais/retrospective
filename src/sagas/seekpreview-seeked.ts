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

function* saga(): SagaIterator {
  const prevLastRequestedStage = yield select(getLastRequestedStage);
  yield delay(100);
  const seekPreviewStatus = yield select(getSeekPreviewStatus);
  const lastRequestedStage = yield select(getLastRequestedStage);
  const stageSeekpreviewAt = yield select(getStageSeekPreviewAt);
  if (
    seekPreviewStatus !== VideoStatus.Seeking &&
    lastRequestedStage === stageSeekpreviewAt &&
    prevLastRequestedStage === lastRequestedStage
  )
    yield put(seekDelayEnded());
}

export default function* watchIncrementAsync(): SagaIterator {
  yield takeEvery(UI_PLAYER_SEEKPREVIEW_SEEKED, saga);
}
