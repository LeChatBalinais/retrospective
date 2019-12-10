import { SagaIterator } from '@redux-saga/core';
import { put, call, takeEvery } from 'redux-saga/effects';
import {
  ACTION_ID as UI_PLAYER_CREATED_FOR_VIDEO_OF_ID,
  Action
} from '~/actions-reducers/ui-player-created-for-video-of-id';
import { actionCreator as tagsFetched } from '~/actions-reducers/saga-tags-fetching-fetched';

function* fetchTagsForVideoOfID({ payload: { ID } }: Action): SagaIterator {
  const response = yield call(fetch, `http://localhost:9000/anchors/${ID}`);

  if (!response.ok) return;

  const { tags } = yield response.json();

  yield put(tagsFetched({ tags: { ...tags, localOnly: [] } }));
}

export default function* watchFetchTags(): SagaIterator {
  yield takeEvery(UI_PLAYER_CREATED_FOR_VIDEO_OF_ID, fetchTagsForVideoOfID);
}
