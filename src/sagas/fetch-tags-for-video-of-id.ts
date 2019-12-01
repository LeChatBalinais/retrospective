import { SagaIterator } from '@redux-saga/core';
import { v4 as uuid } from 'uuid';
import { put, call, takeEvery } from 'redux-saga/effects';
import { ACTION_ID as UI_PLAYER_CREATED_FOR_VIDEO_OF_ID, Action } from '~/actions-reducers/ui-player-created-for-video-of-id';
import { Table, Tag } from '~/state';
import { actionCreator as tagsFetched } from '~/actions-reducers/saga-tags-fetching-fetched';

function* fetchTagsForVideoOfID({ payload: { ID } }: Action): SagaIterator {
    const response = yield call(fetch, `http://localhost:9000/anchors/${ID}`);

    if (!response.ok) return;

    const {
        tags: { byID, allIDs }
    } = yield response.json();

    const tags: Table<Tag> = { byID: {}, allIDs: [] };

    allIDs.forEach((tagID: string): void => {
        const localID = uuid();
        tags.allIDs.push(localID);
        tags.byID[localID] = byID[tagID];
    });

    yield put(tagsFetched({ tags }));
}

export default function* watchFetchTags(): SagaIterator {
    yield takeEvery(UI_PLAYER_CREATED_FOR_VIDEO_OF_ID, fetchTagsForVideoOfID);
}
