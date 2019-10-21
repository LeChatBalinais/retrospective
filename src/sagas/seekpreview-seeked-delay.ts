import { SagaIterator } from '@redux-saga/core';
import { select, put, takeEvery, delay } from 'redux-saga/effects';
import { ACTION_ID as UI_PLAYER_SEEKPREVIEW_SEEKED } from '~/actions-reducers/ui-player-seekpreview-seeked';
import { actionCreator as seekDelayEnded } from '~/actions-reducers/saga-video-seek-delay-ended';
import { getLastRequestedStage } from '~/getters/player';

function* seekPreviewSeekedCase(): SagaIterator {
  const requestedStage = yield select(getLastRequestedStage);
  yield delay(50);
  yield put(seekDelayEnded({ requestedStage }));
}

function* seekPreviewAlreadyOnRequestedStage(): SagaIterator {
  const requestedStage = yield select(getLastRequestedStage);
  yield delay(50);
  yield put(seekDelayEnded({ requestedStage }));
}

export function* watchSeekPreviewSeeked(): SagaIterator {
  yield takeEvery(UI_PLAYER_SEEKPREVIEW_SEEKED, seekPreviewSeekedCase);
}

export function* watchUIListRowClicked(): SagaIterator {
  yield takeEvery(UI_PLAYER_SEEKPREVIEW_SEEKED, seekPreviewAlreadyOnRequestedStage);
}
