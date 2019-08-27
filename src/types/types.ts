import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { State } from './state';
import { SetPlayback } from '../actions/set-playback';
import { SetPlaceNewTagMode } from '../actions/set-place-new-tag-mode';
import { SetCurrentNormalizedTime } from '../actions/set-current-normalized-time';
import { SetDuration } from '../actions/set-duration';
import { SetUserSeek } from '../actions/set-user-seek';
import { AddNewTag } from '../actions/add-new-tag';
import { SetDraggedTag } from '../actions/set-dragged-tag';
import { UpdateTagPath } from '../actions/update-tag-path';
import { SetTags } from '../actions/set-tags';
import { SetCurrentTag } from '../actions/set-current-tag';
import { SetTagTraceVisible } from '../actions/set-tag-trace-visible';
import { RemoveTag } from '../actions/remove-tag';
import { SetTagGlobalID } from '../actions/set-tag-globalid';
import { DeleteTag } from '../actions/delete-tag';
import { SaveTag } from '../actions/save-tag';
import { FetchTags } from '../actions/fetch-tags';
import { SetRequestedNormalizedTime } from '../actions/set-requested-normalized-time';
import { SetTimeTagAppearsAt } from '../actions/set-time-tag-appears-at';
import { SetTimeTagDisappearsAt } from '../actions/set-time-tag-disappears-at';

export interface ActionCombination {
  type: 'ACTION_COMBINATION';
  actions: Action[];
}

export type SimpleAction =
  | SetPlayback
  | SetPlaceNewTagMode
  | SetCurrentNormalizedTime
  | SetDuration
  | SetUserSeek
  | AddNewTag
  | SetDraggedTag
  | UpdateTagPath
  | SetTags
  | SetCurrentTag
  | SetTagTraceVisible
  | RemoveTag
  | SetTagGlobalID
  | DeleteTag
  | SaveTag
  | FetchTags
  | SetRequestedNormalizedTime
  | SetTimeTagAppearsAt
  | SetTimeTagDisappearsAt;

export type Action = SimpleAction | ActionCombination;

export type ThunkAction = ThunkAction<void, State, null, Action>;

export type ThunkDispatch = ThunkDispatch<State, null, Action>;
