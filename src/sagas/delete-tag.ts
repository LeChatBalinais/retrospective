import { SagaIterator } from '@redux-saga/core';
import { put, call, takeEvery } from 'redux-saga/effects';
import {
  ACTION_ID as UI_TAG_LIST_ROW_DELETE_BUTTON_CLICKED,
  Action
} from '~/actions-reducers/ui-tag-list-row-delete-button-clicked';
import { actionCreator as tagDeletionConfirmed } from '~/actions-reducers/saga-tag-deletion-confirmed';

function* deleteTagAsync({ payload: { tagID: ID } }: Action): SagaIterator {
  const response = yield call(fetch, `http://localhost:9000/deleteTag`, {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ ID })
  });

  if (response.ok) yield put(tagDeletionConfirmed({ tagID: ID }));
}

export default function* watchIncrementAsync(): SagaIterator {
  yield takeEvery(UI_TAG_LIST_ROW_DELETE_BUTTON_CLICKED, deleteTagAsync);
}
