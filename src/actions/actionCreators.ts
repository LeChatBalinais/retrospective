import {
  SET_PLAYBACK,
  SET_PLACE_NEW_TAG_MODE,
  SET_CURRENT_TIME,
  SET_DURATION,
  SET_USER_SEEK,
  ADD_NEW_TAG,
  SET_DRAGGED_TAG,
  UPDATE_TAG_PATH,
  SET_TAGS,
  SET_CURRENT_TAG,
  SEEK_TO_TAG,
  SET_TAG_TRACE_VISIBLE,
  MOUSE_DOWN_ON_TAG_GRAPHICS,
  ACTION_COMBINATION,
  REMOVE_TAG,
  SET_TAG_GLOBALID
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
  SetTags,
  SetCurrentTag,
  SeekToTag,
  SetTagTraceVisible,
  MouseDownOnTagGraphics,
  Action,
  ActionCombination,
  RemoveTag,
  SetTagGlobalID
} from '../types/action';
import { Table, Tag } from '../types/state';

export function setPlayback(payload: { playback: boolean }): SetPlayback {
  return { type: SET_PLAYBACK, payload };
}

export function setPlaceNewTagMode(mode?: boolean): SetPlaceNewTagMode {
  return { type: SET_PLACE_NEW_TAG_MODE, payload: { mode } };
}

export function setCurrentTime(
  currentTime: number,
  isNormalized: boolean = false
): SetCurrentTime {
  return {
    type: SET_CURRENT_TIME,
    payload: { time: currentTime, isNormalized }
  };
}

export function setDuration(duration: number): SetDuration {
  return { type: SET_DURATION, payload: { duration } };
}

export function setUserSeek(mode: boolean): SetUserSeek {
  return { type: SET_USER_SEEK, payload: { mode } };
}

export function addNewTag(x: number, y: number): AddNewTag {
  return { type: ADD_NEW_TAG, payload: { x, y } };
}

export function setDraggedTag(ID: string): SetDraggedTag {
  return { type: SET_DRAGGED_TAG, payload: { ID } };
}

export function updateTagPath(
  x: number,
  y: number,
  ID?: string
): UpdateTagPath {
  return { type: UPDATE_TAG_PATH, payload: { ID, x, y } };
}

export function setTags(tags: Table<Tag>): SetTags {
  return { type: SET_TAGS, payload: { tags } };
}

export function setCurrentTag(ID: string): SetCurrentTag {
  return { type: SET_CURRENT_TAG, payload: { ID } };
}

export function seekToTag(ID: string): SeekToTag {
  return { type: SEEK_TO_TAG, payload: { ID } };
}

export function setTagTraceVisible(
  ID: string,
  visible: boolean
): SetTagTraceVisible {
  return { type: SET_TAG_TRACE_VISIBLE, payload: { ID, visible } };
}

export function mouseDownOnTagGraphics(ID: string): MouseDownOnTagGraphics {
  return { type: MOUSE_DOWN_ON_TAG_GRAPHICS, payload: { ID } };
}

export function removeTag(ID: string): RemoveTag {
  return { type: REMOVE_TAG, payload: { ID } };
}

export function setTagGlobalID(ID: string, globalID: string): SetTagGlobalID {
  return { type: SET_TAG_GLOBALID, payload: { ID, globalID } };
}

export function actionCombination(actions: Action[]): ActionCombination {
  return { type: ACTION_COMBINATION, actions };
}
