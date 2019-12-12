import { SagaIterator } from '@redux-saga/core';
import { put, call } from 'redux-saga/effects';
import { actionCreator as videosFetched } from '~/actions-reducers/saga-videos-fetching-fetched';

export default function* fetchVideos(): SagaIterator {
  const response = yield call(fetch, `http://localhost:9000/videos`);

  if (!response.ok) return;

  const { videos } = yield response.json();

  yield put(videosFetched({ videos: { ...videos, localOnly: [] } }));
}
