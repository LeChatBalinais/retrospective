import { SagaIterator } from '@redux-saga/core';
import { v4 as uuid } from 'uuid';
import { put, call, takeEvery } from 'redux-saga/effects';
import { PLAYER_LOADED } from '../actions/ui/player';
import { Table, Tag } from '../types';
import tagsFetched from '~/actions/sagas/tags-fetched';

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

  yield put(tagsFetched({ tags }));
}

export default function* watchFetchTags(): SagaIterator {
  yield takeEvery(PLAYER_LOADED, fetchTags);
}
