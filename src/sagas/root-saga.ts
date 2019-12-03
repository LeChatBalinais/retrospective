import { all } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import { CombinatorEffect } from '@redux-saga/types/index.d';
import deleteTag from './delete-tag';
import saveTag from './save-tag';
import fetchTags from './fetch-tags';
import fetchTagsForVideoOfID from './fetch-tags-for-video-of-id';
import fetchVideos from './fetch-videos';
import {
  watchSeekPreviewSeeked,
  watchUIListRowClicked,
  watchUIPlayerSeekbarMouseDown
} from './seekpreview-seeked-delay';

export default function* rootSaga(): IterableIterator<
  CombinatorEffect<'ALL', SagaIterator>
> {
  yield all([
    deleteTag(),
    saveTag(),
    fetchTags(),
    watchSeekPreviewSeeked(),
    watchUIListRowClicked(),
    watchUIPlayerSeekbarMouseDown(),
    fetchVideos(),
    fetchTagsForVideoOfID()
  ]);
}
