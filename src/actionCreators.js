import {
  SET_PLAYBACK,
  SET_PLACE_NEW_TAG_MODE,
  SET_CURRENT_TIME,
  SET_DURATION,
  SET_USER_SEEK,
  ADD_NEW_TAG,
  SET_TAG_DRAGGED
} from './actions';

export function setPlayback(on) {
  return { type: SET_PLAYBACK, payload: on };
}

export function setPlaceNewTagMode(on) {
  return { type: SET_PLACE_NEW_TAG_MODE, payload: on };
}

export function setCurrentTime(currentTime) {
  return { type: SET_CURRENT_TIME, payload: currentTime };
}

export function setDuration(duration) {
  return { type: SET_DURATION, payload: duration };
}

export function setUserSeek(on) {
  return { type: SET_USER_SEEK, payload: on };
}

export function addNewTag(x, y) {
  return { type: ADD_NEW_TAG, payload: { x, y } };
}

export function setTagDragged(ID, dragged) {
  return { type: SET_TAG_DRAGGED, payload: { ID, dragged } };
}
