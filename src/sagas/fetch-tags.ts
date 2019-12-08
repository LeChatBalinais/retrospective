import { SagaIterator } from '@redux-saga/core';
import { v4 as uuid } from 'uuid';
import { put, call, takeEvery } from 'redux-saga/effects';
// import { ACTION_ID as ROUTE_REFERENCE_EDITOR } from '~/actions-reducers/route-reference-editor';
import { ACTION_ID as ROUTE_COMPOSITION_PLAYER } from '~/actions-reducers/route-composition-player';
import { Table, Tag } from '~/state';
import { actionCreator as tagsFetched } from '~/actions-reducers/saga-tags-fetching-fetched';

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
  // yield takeEvery(ROUTE_REFERENCE_EDITOR, fetchTags);
  yield takeEvery(ROUTE_COMPOSITION_PLAYER, fetchTags);
}
