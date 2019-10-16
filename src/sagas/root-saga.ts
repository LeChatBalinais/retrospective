import { all } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import { CombinatorEffect } from '@redux-saga/types/index.d';
import deleteTag from './delete-tag';
import saveTag from './save-tag';
import fetchTags from './fetch-tags';
import seekpreviewSeeked from './seekpreview-seeked';

export default function* rootSaga(): IterableIterator<
  CombinatorEffect<'ALL', SagaIterator>
> {
  yield all([deleteTag(), saveTag(), fetchTags(), seekpreviewSeeked()]);
}
