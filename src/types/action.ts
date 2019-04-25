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
export interface SetTagDragged {
  type: 'SET_TAG_DRAGGED';
  payload: { ID: string; dragged: boolean };
}
export interface UpdateTagPath {
  type: 'UPDATE_TAG_PATH';
  payload: { ID: string; x: number; y: number };
}
export interface FetchAllVideoMarks {
  type: 'FETCH_ALL_VIDEO_MARKS';
  payload: Tags;
}

export type Action =
  | SetPlayback
  | SetPlaceNewTagMode
  | SetCurrentTime
  | SetDuration
  | SetUserSeek
  | AddNewTag
  | SetTagDragged
  | UpdateTagPath
  | FetchAllVideoMarks;
