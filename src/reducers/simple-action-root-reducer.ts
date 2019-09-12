import { State, SimpleAction } from '../types';
import SetPlayback from './set-playback';
import SetPlaceNewTagMode from './set-place-new-tag-mode';
import AddNewTag from './add-new-tag';
import SetDraggedTag from './set-dragged-tag';
import UpdateTagPath from './update-tag-path';
import SetTags from './set-tags';
import SetTagTraceVisible from './set-tag-trace-visible';
import SetCurrentTag from './set-current-tag';
import RemoveTag from './remove-tag';
import SetTagGlobalID from './set-tag-globalid';
import setTimeTagAppearsAt from './set-time-tag-appears-at';
import setTimeTagDisappearsAt from './set-time-tag-disappears-at';
import mouseDownOnSeekBar from './ui/player/seekbar/mouse-down-on-seekbar';
import mouseUpDuringSeekbarSeeking from './ui/player/seekbar/mouse-up-during-seekbar-seeking';
import videoSeeking from './ui/player/video/video-seeking';
import videoSeeked from './ui/player/video/video-seeked';
import mouseMoveDuringSeekbarSeeking from './ui/player/seekbar/mouse-move-during-seekbar-seeking';
import playButtonClicked from './ui/player/controls/play-button-clicked';
import tagRowClicked from './ui/tag-list/tag-row/tag-row-clicked';
import videoPlayedToTime from './ui/player/video/video-played-to-time';
import videoDurationChanged from './ui/player/video/video-duration-changed';

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
    AddNewTag,
    SetDraggedTag,
    UpdateTagPath,
    SetTags,
    SetTagTraceVisible,
    SetCurrentTag,
    RemoveTag,
    SetTagGlobalID,
    setTimeTagAppearsAt,
    setTimeTagDisappearsAt,
    mouseDownOnSeekBar,
    mouseMoveDuringSeekbarSeeking,
    mouseUpDuringSeekbarSeeking,
    videoSeeking,
    videoSeeked,
    videoPlayedToTime,
    videoDurationChanged,
    playButtonClicked,
    tagRowClicked
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
