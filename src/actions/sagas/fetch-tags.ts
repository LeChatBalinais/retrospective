import { SagaIterator } from '@redux-saga/core';
import { v4 as uuid } from 'uuid';
import { put, call, takeEvery } from 'redux-saga/effects';
import { FETCH_TAGS } from '../fetch-tags';
import setTags from '../set-tags';
import { Table, Tag } from '../../types/state';

function* fetchTags(): SagaIterator {
  const response = yield call(fetch, `http://localhost:9000/markers`);

  if (!response.ok) return;

  const {
    tags: { byID, allIDs }
  } = yield response.json();

  const tags: Table<Tag> = { byID: {}, allIDs: [] };

  allIDs.forEach((ID: string): void => {
    const localID = uuid();
    tags.allIDs.push(localID);
    tags.byID[localID] = byID[ID];
  });

  yield put(setTags({ tags }));
}

export default function* watchFetchTags(): SagaIterator {
  yield takeEvery(FETCH_TAGS, fetchTags);
}
