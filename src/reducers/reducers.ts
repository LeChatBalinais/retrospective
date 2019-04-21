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
} from '../actions';
import DEFAULT_STATE from './default-state';
import setPlayback from './set-playback';
import setPlaceNewTagMode from './set-place-new-tag-mode';
import setCurrentTime from './set-current-time';
import setDuration from './set-duration';
import setUserSeek from './set-user-seek';
import addNewTag from './add-new-tag';
import setTagDragged from './set-tag-dragged';
import updateTagPath from './update-tag-path';
import updateAllTags from './update-all-tags';

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_PLAYBACK: {
      return setPlayback(state, action);
    }
    case SET_PLACE_NEW_TAG_MODE: {
      return setPlaceNewTagMode(state, action);
    }
    case SET_CURRENT_TIME: {
      return setCurrentTime(state, action);
    }
    case SET_DURATION: {
      return setDuration(state, action);
    }
    case SET_USER_SEEK: {
      return setUserSeek(state, action);
    }
    case ADD_NEW_TAG: {
      return addNewTag(state, action);
    }
    case SET_TAG_DRAGGED: {
      return setTagDragged(state, action);
    }
    case UPDATE_TAG_PATH: {
      return updateTagPath(state, action);
    }
    case FETCH_ALL_VIDEO_MARKS: {
      return updateAllTags(state, action);
    }
    default:
      return state;
  }
};

export default rootReducer;