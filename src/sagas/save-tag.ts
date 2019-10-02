import { SagaIterator } from '@redux-saga/core';
import { put, call, takeEvery, select } from 'redux-saga/effects';
import makeGetTag from '../selectors/get-tag';
import {
  ACTION_ID as UI_TAG_LIST_ROW_SAVE_BUTTON_CLICKED,
  Action
} from '~/actions-reducers/ui-tag-list-row-save-button-clicked';

import { actionCreator as tagSavingConfirmed } from '~/actions-reducers/saga-tag-saving-confirmed';

const getTag = makeGetTag();

function* saveTag({ payload: { tagID } }: Action): SagaIterator {
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
  yield takeEvery(UI_TAG_LIST_ROW_SAVE_BUTTON_CLICKED, saveTag);
}
