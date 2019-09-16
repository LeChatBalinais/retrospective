import { SagaIterator } from '@redux-saga/core';
import { put, call, takeEvery, select } from 'redux-saga/effects';
import makeGetTag from '../selectors/get-tag';

import { DELETE_TAG_BUTTON_CLICKED, DeleteTagButtonClicked } from '../types';
import tagDeletionConfirmed from '~/actions/sagas/tag-deletion-confirmed';

const getTag = makeGetTag();

function* deleteTagAsync({
  payload: { tagID: ID }
}: DeleteTagButtonClicked): SagaIterator {
  const { globalID } = yield select(getTag, ID);

  const response = yield call(fetch, `http://localhost:9000/deleteTag`, {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ ID: globalID })
  });

  if (response.ok) yield put(tagDeletionConfirmed({ tagID: ID }));
}

export default function* watchIncrementAsync(): SagaIterator {
  yield takeEvery(DELETE_TAG_BUTTON_CLICKED, deleteTagAsync);
}
