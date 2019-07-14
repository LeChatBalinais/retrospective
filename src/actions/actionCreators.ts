import {
  SET_PLAYBACK,
  SET_PLACE_NEW_TAG_MODE,
  SET_CURRENT_TIME,
  SET_DURATION,
  SET_USER_SEEK,
  ADD_NEW_TAG,
  SET_DRAGGED_TAG,
  UPDATE_TAG_PATH,
  ADD_FETCHED_TAGS,
  SET_CURRENT_TAG,
  SEEK_TO_TAG
} from './actions';

import {
  SetPlayback,
  SetPlaceNewTagMode,
  SetCurrentTime,
  SetUserSeek,
  SetDuration,
  AddNewTag,
  SetDraggedTag,
  UpdateTagPath,
  AddFetchedTags,
  SetCurrentTag,
  SeekToTag
} from '../types/action';
import { Tags } from '../types/state';

export function setPlayback(on: boolean): SetPlayback {
  return { type: SET_PLAYBACK, payload: on };
}

export function setPlaceNewTagMode(on: boolean): SetPlaceNewTagMode {
  return { type: SET_PLACE_NEW_TAG_MODE, payload: on };
}

export function setCurrentTime(currentTime: number): SetCurrentTime {
  return { type: SET_CURRENT_TIME, payload: currentTime };
}

export function setDuration(duration: number): SetDuration {
  return { type: SET_DURATION, payload: duration };
}

export function setUserSeek(on: boolean): SetUserSeek {
  return { type: SET_USER_SEEK, payload: on };
}

export function addNewTag(x: number, y: number): AddNewTag {
  return { type: ADD_NEW_TAG, payload: { x, y } };
}

export function setDraggedTag(ID: string): SetDraggedTag {
  return { type: SET_DRAGGED_TAG, payload: { ID } };
}

export function updateTagPath(ID: string, x: number, y: number): UpdateTagPath {
  return { type: UPDATE_TAG_PATH, payload: { ID, x, y } };
}

export function addFetchedTags(markers: Tags): AddFetchedTags {
  return { type: ADD_FETCHED_TAGS, payload: markers };
}

export function setCurrentTag(ID: string): SetCurrentTag {
  return { type: SET_CURRENT_TAG, payload: ID };
}

export function seekToTag(ID: string): SeekToTag {
  return { type: SEEK_TO_TAG, payload: ID };
}
