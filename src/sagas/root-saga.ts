import { all } from 'redux-saga/effects';
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

import { ACTION_ID as ROUTE_COMPOSITION_PLAYER } from '~/actions-reducers/route-composition-player';
import { ACTION_ID as ROUTE_REFERENCE_EDITOR } from '~/actions-reducers/route-reference-editor';
import { ACTION_ID as ROUTE_HOME } from '~/actions-reducers/route-home';
import { ACTION_ID as UI_TAG_LIST_ROW_DELETE_BUTTON_CLICKED } from '~/actions-reducers/ui-tag-list-row-delete-button-clicked';
import { watchAction } from './watch-action';

export default function* rootSaga(): IterableIterator<any> {
  yield all([
    watchAction(UI_TAG_LIST_ROW_DELETE_BUTTON_CLICKED, deleteTag),
    saveTag(),
    watchAction(ROUTE_COMPOSITION_PLAYER, fetchTags),
    watchAction(ROUTE_REFERENCE_EDITOR, fetchTags),
    watchAction(ROUTE_HOME, fetchVideos),
    watchSeekPreviewSeeked(),
    watchUIListRowClicked(),
    watchUIPlayerSeekbarMouseDown(),
    fetchVideos(),
    fetchTagsForVideoOfID()
  ]);
}
