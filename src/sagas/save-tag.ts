import { SagaIterator } from '@redux-saga/core';
import { put, call, takeEvery, select } from 'redux-saga/effects';
import makeGetTag from '../selectors/get-tag';
import setTagGlobalID from '../actions/set-tag-globalid';
import { SAVE_TAG } from '../actions/save-tag';
import { SaveTag } from '../types';

const getTag = makeGetTag();

function* saveTag({ payload: { ID } }: SaveTag): SagaIterator {
  const tag = yield select(getTag, ID);

  const response = yield call(fetch, `http://localhost:9000/addTag`, {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ tagID: ID, tag })
  });

  if (!response.ok) return;

  const { id: globalID } = yield response.json();

  if (response.ok) yield put(setTagGlobalID({ ID, globalID }));
}

export default function* watchIncrementAsync(): SagaIterator {
  yield takeEvery(SAVE_TAG, saveTag);
}
