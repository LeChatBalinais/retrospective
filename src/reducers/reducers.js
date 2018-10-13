import { SET_PLAYBACK, SET_PLACE_NEW_TAG_MODE } from '../actions';
import setPlayback from './set-playback';
import setPlaceNewTagMode from './set-place-new-tag-mode';

const DEFAULT_STATE = {
  superVideoState: {
    playback: false
  },
  editorState: {
    placeNewTagMode: false
  }
};

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_PLAYBACK: {
      return setPlayback(state, action);
    }
    case SET_PLACE_NEW_TAG_MODE: {
      return setPlaceNewTagMode(state, action);
    }
    default:
      return state;
  }
};

export default rootReducer;
