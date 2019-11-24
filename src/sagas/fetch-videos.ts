import { SagaIterator } from '@redux-saga/core';
import { v4 as uuid } from 'uuid';
import { put, call, takeEvery } from 'redux-saga/effects';
import { ACTION_ID as UI_PLAYER_LOADED } from '~/actions-reducers/ui-player-loaded';
import { actionCreator as videosFetched } from '~/actions-reducers/saga-videos-fetching-fetched';
import { Videos } from '~/state/videos';

function* fetchVideos(): SagaIterator {
  const response = yield call(fetch, `http://localhost:9000/videos`);

  if (!response.ok) return;

  const {
    videos: { byID, allIDs }
  } = yield response.json();

  const videos: Videos = { byID: {}, allIDs: [] };

  allIDs.forEach((ID: string): void => {
    const localID = uuid();
    videos.allIDs.push(localID);
    videos.byID[localID] = { globalID: ID, ...byID[ID] };
  });

  yield put(videosFetched({ videos }));
}

export default function* watchFetchTags(): SagaIterator {
  yield takeEvery(UI_PLAYER_LOADED, fetchVideos);
}
