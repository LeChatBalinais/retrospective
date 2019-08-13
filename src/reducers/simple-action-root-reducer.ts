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
import setCurrentTag from './set-current-tag';
import removeTag from './remove-tag';
import setTagGlobalID from './set-tag-globalid';
import { State } from '../types/state';
import { SimpleAction } from '../types/types';
import { SetPlayback } from '../actions/set-playback';

const simpleActionRootReducer = (): ((
  state: State,
  action: SimpleAction
) => State) => {
  const reducersByActionType = {
    [setPlayback.actionType]: setPlayback.reducer
  };

  return (state: State, action: SimpleAction): State => {
    const reducer = reducersByActionType[action.type];
    if (reducer === undefined) return state;
    return reducer(state, action);
  };
};

// const simpleActionRootReducer = (state: State, action: SimpleAction): State => {
//   switch (action.type) {
//     case SET_PLAYBACK: {
//       return setPlayback(state, action);
//     }
//     case SET_PLACE_NEW_TAG_MODE: {
//       return setPlaceNewTagMode(state, action);
//     }
//     case SET_CURRENT_NORMALIZED_TIME: {
//       return setCurrentTime(state, action);
//     }
//     case SET_DURATION: {
//       return setDuration(state, action);
//     }
//     case SET_USER_SEEK: {
//       return setUserSeek(state, action);
//     }
//     case ADD_NEW_TAG: {
//       return addNewTag(state, action);
//     }
//     case SET_DRAGGED_TAG: {
//       return setDraggedTag(state, action);
//     }
//     case UPDATE_TAG_PATH: {
//       return updateTagPath(state, action);
//     }
//     case SET_TAGS: {
//       return setTags(state, action);
//     }
//     case SET_CURRENT_TAG: {
//       return setCurrentTag(state, action);
//     }
//     case SET_TAG_TRACE_VISIBLE: {
//       return setTagTraceVisible(state, action);
//     }
//     case REMOVE_TAG: {
//       return removeTag(state, action);
//     }
//     case SET_TAG_GLOBALID: {
//       return setTagGlobalID(state, action);
//     }
//     default:
//       return state;
//   }
// };

export default simpleActionRootReducer;
