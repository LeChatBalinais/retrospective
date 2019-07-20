import { Tags } from './state';

export interface SetPlayback {
  type: 'SET_PLAYBACK';
  payload: boolean;
}

export interface SetPlaceNewTagMode {
  type: 'SET_PLACE_NEW_TAG_MODE';
  payload: boolean;
}

export interface SetCurrentTime {
  type: 'SET_CURRENT_TIME';
  payload: number;
}
export interface SetDuration {
  type: 'SET_DURATION';
  payload: number;
}
export interface SetUserSeek {
  type: 'SET_USER_SEEK';
  payload: boolean;
}
export interface AddNewTag {
  type: 'ADD_NEW_TAG';
  payload: { x: number; y: number };
}
export interface SetDraggedTag {
  type: 'SET_DRAGGED_TAG';
  payload: { ID: string };
}
export interface UpdateTagPath {
  type: 'UPDATE_TAG_PATH';
  payload: { ID: string; x: number; y: number };
}
export interface AddFetchedTags {
  type: 'ADD_FETCHED_TAGS';
  payload: Tags;
}

export interface SetCurrentTag {
  type: 'SET_CURRENT_TAG';
  payload: string;
}

export interface SeekToTag {
  type: 'SEEK_TO_TAG';
  payload: string;
}

export interface SetTagTraceVisible {
  type: 'SET_TAG_TRACE_VISIBLE';
  payload: { ID: string; visible: boolean }
}

export type Action =
  | SetPlayback
  | SetPlaceNewTagMode
  | SetCurrentTime
  | SetDuration
  | SetUserSeek
  | AddNewTag
  | SetDraggedTag
  | UpdateTagPath
  | AddFetchedTags
  | SetCurrentTag
  | SeekToTag
  | SetTagTraceVisible;
