import { SagaIterator } from '@redux-saga/core';
import { put, call, takeEvery, select } from 'redux-saga/effects';
import { DELETE_TAG, DeleteTag } from '../actions/delete-tag';
import makeGetTag from '../selectors/get-tag';
import removeTag from '../actions/remove-tag';

const getTag = makeGetTag();

function* incrementAsync({ payload: { ID } }: DeleteTag): SagaIterator {
  const { globalID } = yield select(getTag, ID);

  const response = yield call(fetch, `http://localhost:9000/deleteTag`, {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ ID: globalID })
  });

  if (response.ok) yield put(removeTag({ ID }));
}

export default function* watchIncrementAsync(): SagaIterator {
  yield takeEvery(DELETE_TAG, incrementAsync);
}
