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
  SEEK_TO_TAG,
  SET_TAG_TRACE_VISIBLE,
  MOUSE_DOWN_ON_TAG_GRAPHICS,
  ACTION_COMBINATION
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
  SeekToTag,
  SetTagTraceVisible,
  MouseDownOnTagGraphics,
  Action,
  ActionCombination
} from '../types/action';
import { Tags } from '../types/state';

export function setPlayback(on?: boolean): SetPlayback {
  return { type: SET_PLAYBACK, payload: on };
}

export function setPlaceNewTagMode(on?: boolean): SetPlaceNewTagMode {
  return { type: SET_PLACE_NEW_TAG_MODE, payload: on };
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

export function updateTagPath(
  x: number,
  y: number,
  ID?: string
): UpdateTagPath {
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

export function setTagTraceVisible(
  ID: string,
  visible: boolean
): SetTagTraceVisible {
  return { type: SET_TAG_TRACE_VISIBLE, payload: { ID, visible } };
}

export function mouseDownOnTagGraphics(ID: string): MouseDownOnTagGraphics {
  return { type: MOUSE_DOWN_ON_TAG_GRAPHICS, payload: { ID } };
}

export function actionCombination(actions: Action[]): ActionCombination {
  return { type: ACTION_COMBINATION, actions };
}
