import { SET_PLAYBACK, SET_PLACE_NEW_TAG_MODE } from './actions';

export function setPlayback(on) {
  return { type: SET_PLAYBACK, payload: on };
}

export function setPlaceNewTagMode(on) {
  return { type: SET_PLACE_NEW_TAG_MODE, payload: on };
}
