import SetPlayback from './set-playback';
import SetPlaceNewTagMode from './set-place-new-tag-mode';
import SetCurrentStage from './set-current-time';
import SetDuration from './set-duration';
import SetUserSeek from './set-user-seek';
import AddNewTag from './add-new-tag';
import SetDraggedTag from './set-dragged-tag';
import UpdateTagPath from './update-tag-path';
import SetTags from './set-tags';
import SetTagTraceVisible from './set-tag-trace-visible';
import SetCurrentTag from './set-current-tag';
import RemoveTag from './remove-tag';
import SetTagGlobalID from './set-tag-globalid';
import SetStageSeekTo from './set-stage-seek-to';
import { State, SimpleAction } from '../types';
import setTimeTagAppearsAt from './set-time-tag-appears-at';
import setTimeTagDisappearsAt from './set-time-tag-disappears-at';

const simpleActionRootReducer = (): ((
  state: State,
  action: SimpleAction
) => State) => {
  const reducers: {
    actionType: string;
    reducer: (state: State, action: SimpleAction) => State;
  }[] = [
    SetPlayback,
    SetPlaceNewTagMode,
    SetCurrentStage,
    SetDuration,
    SetUserSeek,
    AddNewTag,
    SetDraggedTag,
    UpdateTagPath,
    SetTags,
    SetTagTraceVisible,
    SetCurrentTag,
    RemoveTag,
    SetTagGlobalID,
    SetStageSeekTo,
    setTimeTagAppearsAt,
    setTimeTagDisappearsAt
  ];

  const reducersByActionType = {};
  reducers.forEach(
    (reducer: {
      actionType: string;
      reducer: (state: State, action: SimpleAction) => State;
    }): void => {
      reducersByActionType[reducer.actionType] = reducer.reducer;
    }
  );

  return (state: State, action: SimpleAction): State => {
    const reducer = reducersByActionType[action.type];
    if (reducer === undefined) return state;
    return reducer(state, action);
  };
};

export default simpleActionRootReducer();
