import { SagaIterator } from '@redux-saga/core';
import { put, call, takeEvery } from 'redux-saga/effects';
import { ACTION_ID as ROUTE_HOME } from '~/actions-reducers/route-home';
import { actionCreator as videosFetched } from '~/actions-reducers/saga-videos-fetching-fetched';

function* fetchVideos(): SagaIterator {
  const response = yield call(fetch, `http://localhost:9000/videos`);

  if (!response.ok) return;

  const { videos } = yield response.json();

  yield put(videosFetched({ videos: { ...videos, localOnly: [] } }));
}

export default function* watchFetchTags(): SagaIterator {
  yield takeEvery(ROUTE_HOME, fetchVideos);
}
