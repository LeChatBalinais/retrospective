import {
  SET_PLAYBACK,
  SET_PLACE_NEW_TAG_MODE,
  SET_CURRENT_TIME
} from '../actions';
import DEFAULT_STATE from './default-state';
import setPlayback from './set-playback';
import setPlaceNewTagMode from './set-place-new-tag-mode';
import setCurrentTime from './set-current-time';

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
    default:
      return state;
  }
};

export default rootReducer;
