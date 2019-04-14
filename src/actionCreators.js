import {
  SET_PLAYBACK,
  SET_PLACE_NEW_TAG_MODE,
  SET_CURRENT_TIME,
  SET_DURATION,
  SET_USER_SEEK,
  ADD_NEW_TAG,
  SET_TAG_DRAGGED,
  UPDATE_TAG_PATH,
  FETCH_ALL_VIDEO_MARKS
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

export function updateTagPath(ID, x, y) {
  return { type: UPDATE_TAG_PATH, payload: { ID, x, y } };
}
export function fetchAllVideoMarks(markers) {
  return { type: FETCH_ALL_VIDEO_MARKS, payload: { markers } };
}

export function fetchAllVideoMarksAsync(videoID) {
  return dispatch => {
    console.log(videoID);
    fetch(`http://localhost:7000/markers`).then(response => {
      response.json().then(data => {
        const { tags: tagObject } = data;
        const tags = tagObject;
        dispatch(fetchAllVideoMarks(tags));
      });
    });
  };
}
