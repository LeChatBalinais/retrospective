import { State, SimpleAction } from '../types';
import SetPlayback from './set-playback';
import SetPlaceNewTagMode from './set-place-new-tag-mode';
import SetTagTraceVisible from './set-tag-trace-visible';
import SetCurrentTag from './set-current-tag';
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
import tagDeletionConfirmed from './sagas/tag-deletion-confirmed';
import newTagLayerClicked from './ui/player/new-tag-layer/new-tag-layer-clicked';
import tagSavingConfirmed from './sagas/tag-saving-confirmed';
import tagsFetched from './sagas/tags-fetched';
import mouseDownOnAugmentation from './ui/player/augmentation/mouse_down_on_augmentation';
import mouseUpOnAugmentation from './ui/player/augmentation/mouse_up_on_augmentation';
import mouseMoveOnAugmentation from './ui/player/augmentation/mouse_move_on_augmentation';
import mouseDownOnTag from './ui/player/augmentation/tag/mouse_down_on_tag';
import mouseUpOnTag from './ui/player/augmentation/tag/mouse_up_on_tag';

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
    SetTagTraceVisible,
    SetCurrentTag,
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
    tagRowClicked,
    newTagLayerClicked,
    tagDeletionConfirmed,
    tagSavingConfirmed,
    tagsFetched,
    mouseDownOnAugmentation,
    mouseUpOnAugmentation,
    mouseMoveOnAugmentation,
    mouseDownOnTag,
    mouseUpOnTag
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
