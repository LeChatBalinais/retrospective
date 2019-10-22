import { SagaIterator } from '@redux-saga/core';
import { select, put, takeEvery, delay } from 'redux-saga/effects';
import { ACTION_ID as UI_PLAYER_SEEKPREVIEW_SEEKED } from '~/actions-reducers/ui-player-seekpreview-seeked';
import { ACTION_ID as UI_TAG_LIST_ROW_CLICKED } from '~/actions-reducers/ui-tag-list-row-clicked';
import { ACTION_ID as UI_PLAYER_SEEKBAR_MOUSE_DOWN } from '~/actions-reducers/ui-player-seekbar-mouse-down';
import { actionCreator as seekDelayEnded } from '~/actions-reducers/saga-video-seek-delay-ended';
import {
  getLastRequestedStage,
  getStageSeekPreviewAt,
  getSeekPreviewStatus,
  isDelayOn
} from '~/getters/player';
import { VideoStatus } from '~/state';

function* seekPreviewSeekedCase(): SagaIterator {
  const requestedStage = yield select(getLastRequestedStage);
  yield delay(50);
  yield put(seekDelayEnded({ requestedStage }));
}

function* seekPreviewAlreadyOnRequestedStage(): SagaIterator {
  const requestedStage = yield select(getLastRequestedStage);
  const stageSeekPreviewAt = yield select(getStageSeekPreviewAt);
  const seekPreviewStatus = yield select(getSeekPreviewStatus);
  const delayIsOn = yield select(isDelayOn);
  if (
    requestedStage !== stageSeekPreviewAt ||
    seekPreviewStatus === VideoStatus.Seeking ||
    delayIsOn
  )
    return;

  yield delay(50);
  yield put(seekDelayEnded({ requestedStage }));
}

export function* watchSeekPreviewSeeked(): SagaIterator {
  yield takeEvery(UI_PLAYER_SEEKPREVIEW_SEEKED, seekPreviewSeekedCase);
}

export function* watchUIListRowClicked(): SagaIterator {
  yield takeEvery(UI_TAG_LIST_ROW_CLICKED, seekPreviewAlreadyOnRequestedStage);
}

export function* watchUIPlayerSeekbarMouseDown(): SagaIterator {
  yield takeEvery(
    UI_PLAYER_SEEKBAR_MOUSE_DOWN,
    seekPreviewAlreadyOnRequestedStage
  );
}
