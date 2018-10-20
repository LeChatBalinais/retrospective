import {
  SET_PLAYBACK,
  SET_PLACE_NEW_TAG_MODE,
  SET_CURRENT_TIME,
  SET_DURATION
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
