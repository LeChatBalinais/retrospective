// @flow

import {
  SET_PLAYBACK,
  SET_PLACE_NEW_TAG_MODE,
  SET_CURRENT_TIME,
  SET_DURATION,
  SET_USER_SEEK,
  ADD_NEW_TAG,
  SET_TAG_DRAGGED,
  UPDATE_TAG_PATH
} from './actions';

import type { Action } from './actions';

export function setPlayback(on: boolean): Action {
  return { type: SET_PLAYBACK, payload: on };
}

export function setPlaceNewTagMode(on: boolean): Action {
  return { type: SET_PLACE_NEW_TAG_MODE, payload: on };
}

export function setCurrentTime(currentTime: number): Action {
  return { type: SET_CURRENT_TIME, payload: currentTime };
}

export function setDuration(duration: number): Action {
  return { type: SET_DURATION, payload: duration };
}

export function setUserSeek(on: boolean): Action {
  return { type: SET_USER_SEEK, payload: on };
}

export function addNewTag(x: number, y: number): Action {
  return { type: ADD_NEW_TAG, payload: { x, y } };
}

export function setTagDragged(ID: number, dragged: boolean): Action {
  return { type: SET_TAG_DRAGGED, payload: { ID, dragged } };
}

export function updateTagPath(ID: number, x: number, y: number): Action {
  return { type: UPDATE_TAG_PATH, payload: { ID, x, y } };
}
