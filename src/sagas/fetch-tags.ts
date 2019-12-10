import { SagaIterator } from '@redux-saga/core';
import { put, call, takeEvery } from 'redux-saga/effects';
// import { ACTION_ID as ROUTE_REFERENCE_EDITOR } from '~/actions-reducers/route-reference-editor';
import { ACTION_ID as ROUTE_COMPOSITION_PLAYER } from '~/actions-reducers/route-composition-player';
import { actionCreator as tagsFetched } from '~/actions-reducers/saga-tags-fetching-fetched';

function* fetchTags(): SagaIterator {
  const response = yield call(fetch, `http://localhost:9000/markers`);

  if (!response.ok) return;

  const { tags } = yield response.json();

  yield put(tagsFetched({ tags: { ...tags, localOnly: [] } }));
}

export default function* watchFetchTags(): SagaIterator {
  // yield takeEvery(ROUTE_REFERENCE_EDITOR, fetchTags);
  yield takeEvery(ROUTE_COMPOSITION_PLAYER, fetchTags);
}
