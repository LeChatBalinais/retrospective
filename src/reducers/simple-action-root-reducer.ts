import { State, SimpleAction } from '../types';
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
import setTimeTagAppearsAt from './set-time-tag-appears-at';
import setTimeTagDisappearsAt from './set-time-tag-disappears-at';
import setVideoStatus from './set-video-status';
import videoStartSeekingToStage from './video-start-seeking-to-stage';
import mouseDownOnSeekBar from './player/seekbar/mouse-down-on-seekbar';
import mouseUpDuringSeekbarSeeking from './player/seekbar/mouse-up-during-seekbar-seeking';
import videoSeeking from './player/video/video-seeking';
import videoSeeked from './player/video/video-seeked';
import mouseMoveDuringSeekbarSeeking from './player/seekbar/mouse-move-during-seekbar-seeking';

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
    setTimeTagDisappearsAt,
    setVideoStatus,
    videoStartSeekingToStage,
    mouseDownOnSeekBar,
    mouseMoveDuringSeekbarSeeking,
    mouseUpDuringSeekbarSeeking,
    videoSeeking,
    videoSeeked
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
