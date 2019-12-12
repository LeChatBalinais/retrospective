import { SagaIterator } from '@redux-saga/core';
import { put, call } from 'redux-saga/effects';
import { actionCreator as tagsFetched } from '~/actions-reducers/saga-tags-fetching-fetched';

export default function* fetchTags(): SagaIterator {
  const response = yield call(fetch, `http://localhost:9000/markers`);

  if (!response.ok) return;

  const { tags } = yield response.json();

  yield put(tagsFetched({ tags: { ...tags, localOnly: [] } }));
}
