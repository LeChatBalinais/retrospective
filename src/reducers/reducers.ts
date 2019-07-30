import DEFAULT_STATE from './default-state';
import { State } from '../types/state';
import { Action, ActionCombination, SimpleAction } from '../types/action';
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
} from '../actions/actions';
import setPlayback from './set-playback';
import setPlaceNewTagMode from './set-place-new-tag-mode';
import setCurrentTime from './set-current-time';
import setDuration from './set-duration';
import setUserSeek from './set-user-seek';
import addNewTag from './add-new-tag';
import setDraggedTag from './set-dragged-tag';
import updateTagPath from './update-tag-path';
import addFetchedTags from './add-fetched-tags';
import setTagTraceVisible from './set-tag-trace-visible';
import mouseDownOnTagGraphics from './mouse-down-on-tag-graphics';
import setCurrentTag from './set-current-tag';
import seekToTag from './seek-to-tag';

const simpleActionRootReducer = (state: State, action: SimpleAction): State => {
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
    case SET_TAG_TRACE_VISIBLE: {
      return setTagTraceVisible(state, action);
    }
    case MOUSE_DOWN_ON_TAG_GRAPHICS: {
      return mouseDownOnTagGraphics(state, action);
    }
    default:
      return state;
  }
};

function actionCombinationRootReducer(
  state: State,
  action: ActionCombination
): State {
  const reducer = (accumulator: State, currentValue: Action): State => {
    if (currentValue.type === ACTION_COMBINATION)
      return actionCombinationRootReducer(
        accumulator,
        currentValue as ActionCombination
      );

    return simpleActionRootReducer(accumulator, currentValue as SimpleAction);
  };
  return action.actions.reduce(reducer, state);
}

const rootReducer = (state: State = DEFAULT_STATE, action: Action): State => {
  if (action.type === ACTION_COMBINATION)
    return actionCombinationRootReducer(state, action as ActionCombination);

  return simpleActionRootReducer(state, action as SimpleAction);
};

export default rootReducer;
