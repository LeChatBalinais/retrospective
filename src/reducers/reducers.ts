import DEFAULT_STATE from './default-state';
import { State } from '../types/state';
import { Action, ActionCombination, SimpleAction } from '../types/types';
import { SET_PLAYBACK } from '../actions/set-playback';
import { SET_PLACE_NEW_TAG_MODE } from '../actions/set-place-new-tag-mode';
import { SET_CURRENT_TIME } from '../actions/set-current-time';
import { SET_DURATION } from '../actions/set-duration';
import { SET_USER_SEEK } from '../actions/set-user-seek';
import setPlayback from './set-playback';
import setPlaceNewTagMode from './set-place-new-tag-mode';
import setCurrentTime from './set-current-time';
import setDuration from './set-duration';
import setUserSeek from './set-user-seek';
import addNewTag from './add-new-tag';
import setDraggedTag from './set-dragged-tag';
import updateTagPath from './update-tag-path';
import setTags from './set-tags';
import setTagTraceVisible from './set-tag-trace-visible';
import mouseDownOnTagGraphics from './mouse-down-on-tag-graphics';
import setCurrentTag from './set-current-tag';
import seekToTag from './seek-to-tag';
import removeTag from './remove-tag';
import setTagGlobalID from './set-tag-globalid';
import { ADD_NEW_TAG } from '../actions/add-new-tag';
import { SET_DRAGGED_TAG } from '../actions/set-dragged-tag';
import { UPDATE_TAG_PATH } from '../actions/update-tag-path';
import { SET_TAGS } from '../actions/set-tags';
import { SET_CURRENT_TAG } from '../actions/set-current-tag';
import { SEEK_TO_TAG } from '../actions/seek-to-tag';
import { SET_TAG_TRACE_VISIBLE } from '../actions/set-tag-trace-visible';
import { MOUSE_DOWN_ON_TAG_GRAPHICS } from '../actions/mouse-down-on-tag-graphics';
import { REMOVE_TAG } from '../actions/remove-tag';
import { SET_TAG_GLOBALID } from '../actions/set-tag-globalid';
import { ACTION_COMBINATION } from '../actions/action-combination';

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
    case SET_TAGS: {
      return setTags(state, action);
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
    case REMOVE_TAG: {
      return removeTag(state, action);
    }
    case SET_TAG_GLOBALID: {
      return setTagGlobalID(state, action);
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
