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
} from '../actions/actions';
import DEFAULT_STATE from './default-state';
import setPlayback from './set-playback';
import setPlaceNewTagMode from './set-place-new-tag-mode';
import setCurrentTime from './set-current-time';
import setDuration from './set-duration';
import setUserSeek from './set-user-seek';
import addNewTag from './add-new-tag';
import setDraggedTag from './set-dragged-tag';
import updateTagPath from './update-tag-path';
import addFetchedTags from './add-fetched-tags';
import { State } from '../types/state';
import { Action } from '../types/action';
import setCurrentTag from './set-current-tag';
import seekToTag from './seek-to-tag';

const rootReducer = (state: State = DEFAULT_STATE, action: Action): State => {
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
    case SET_DRAGGED_TAG: {
      return setDraggedTag(state, action);
    }
    case UPDATE_TAG_PATH: {
      return updateTagPath(state, action);
    }
    case ADD_FETCHED_TAGS: {
      return addFetchedTags(state, action);
    }
    case SET_CURRENT_TAG: {
      return setCurrentTag(state, action);
    }
    case SEEK_TO_TAG: {
      return seekToTag(state, action);
    }
    default:
      return state;
  }
};

export default rootReducer;
