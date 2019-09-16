import { SagaIterator } from '@redux-saga/core';
import { put, call, takeEvery, select } from 'redux-saga/effects';
import makeGetTag from '../selectors/get-tag';
import { SaveTagButtonClicked, SAVE_TAG_BUTTON_CLICKED } from '../types';
import tagSavingConfirmed from '~/actions/sagas/tag-saving-confirmed';

const getTag = makeGetTag();

function* saveTag({ payload: { tagID } }: SaveTagButtonClicked): SagaIterator {
  const tag = yield select(getTag, tagID);

  const response = yield call(fetch, `http://localhost:9000/addTag`, {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ tagID, tag })
  });

  if (!response.ok) return;

  const { id: tagGlobalID } = yield response.json();

  if (response.ok) yield put(tagSavingConfirmed({ tagID, tagGlobalID }));
}

export default function* watchIncrementAsync(): SagaIterator {
  yield takeEvery(SAVE_TAG_BUTTON_CLICKED, saveTag);
}
