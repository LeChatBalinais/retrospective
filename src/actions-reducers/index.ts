import { State } from '~/state';
import DEFAULT_STATE from '~/default-state';
import { Reducer } from '~/utils/experimental/create-reducer';
import { SagaAction, sagaReducersRegister } from './saga';
import * as uiNewTabButtonClicked from './ui-new-tag-button-clicked';
import * as uiTagListRowDeleteButtonClicked from './ui-tag-list-row-delete-button-clicked';
import * as uiTagListRowSaveButtonClicked from './ui-tag-list-row-save-button-clicked';
import * as uiTagListRowClicked from './ui-tag-list-row-clicked';
import * as uiActiveTagPanelLabelClicked from './ui-active-tag-panel-label-clicked';
import * as uiPlayerLoaded from './ui-player-loaded';
import * as uiPlayerVideoSeeking from './ui-player-video-seeking';
import * as uiPlayerVideoSeeked from './ui-player-video-seeked';
import * as uiPlayerVideoDurationChanged from './ui-player-video-duration-changed';
import * as uiPlayerVideoPlayedToTime from './ui-player-video-played-to-time';
import * as uiPlayerVideoPlaying from './ui-player-video-playing';
import * as uiPlayerVideoPaused from './ui-player-video-paused';
import * as uiPlayerAugmentationMouseDown from './ui-player-augmentation-mouse-down';
import * as uiPlayerAugmentationMouseMove from './ui-player-augmentation-mouse-move';
import * as uiPlayerAugmentationMouseUp from './ui-player-augmentation-mouse-up';
import * as uiPlayerAugmentationTagMouseDown from './ui-player-augmentation-tag-mouse-down';
import * as uiPlayerAugmentationTagMouseUp from './ui-player-augmentation-tag-mouse-up';
import * as uiPlayerAugmentationTagMouseEnter from './ui-tag-mouse-enter';
import * as uiPlayerAugmentationTagMouseOut from './ui-tag-mouse-out';
import * as uiPlayerControlsPlayButtonClicked from './ui-player-play-button-clicked';
import * as uiPlayerNewTagLayerClicked from './ui-player-new-tag-layer-clicked';
import * as uiPlayerSeekbarMouseDown from './ui-player-seekbar-mouse-down';
import * as uiPlayerSeekbarMouseMoveDuringSeeking from './ui-player-seekbar-mouse-move-during-seeking';
import * as uiPlayerSeekbarMouseUpDuringSeeking from './ui-player-seekbar-mouse-up-during-seeking';
import * as uiCurrentTagPanelAppearsAtEdited from './ui-current-tag-panel-appears-at-edited';
import * as uiCurrentTagPanelDisappearsAtEdited from './ui-current-tag-panel-disappears-at-edited';
import * as uiCurrentTagPanelTraceVisibilityCheckboxToggled from './ui-current-tag-panel-trace-visibility-checkbox-toggled';
import * as uiPlayerSeekpreviewSeeking from './ui-player-seekpreview-seeking';
import * as uiPlayerSeekpreviewSeeked from './ui-player-seekpreview-seeked';

export type Action =
  | SagaAction
  | uiNewTabButtonClicked.Action
  | uiTagListRowDeleteButtonClicked.Action
  | uiTagListRowSaveButtonClicked.Action
  | uiTagListRowClicked.Action
  | uiActiveTagPanelLabelClicked.Action
  | uiPlayerLoaded.Action
  | uiPlayerVideoSeeking.Action
  | uiPlayerVideoDurationChanged.Action
  | uiPlayerVideoSeeked.Action
  | uiPlayerVideoPlayedToTime.Action
  | uiPlayerSeekpreviewSeeking.Action
  | uiPlayerSeekpreviewSeeked.Action
  | uiPlayerVideoPlaying.Action
  | uiPlayerVideoPaused.Action
  | uiPlayerAugmentationMouseDown.Action
  | uiPlayerAugmentationMouseMove.Action
  | uiPlayerAugmentationMouseUp.Action
  | uiPlayerAugmentationTagMouseDown.Action
  | uiPlayerAugmentationTagMouseUp.Action
  | uiPlayerAugmentationTagMouseEnter.Action
  | uiPlayerAugmentationTagMouseOut.Action
  | uiPlayerControlsPlayButtonClicked.Action
  | uiPlayerNewTagLayerClicked.Action
  | uiPlayerSeekbarMouseDown.Action
  | uiPlayerSeekbarMouseMoveDuringSeeking.Action
  | uiPlayerSeekbarMouseUpDuringSeeking.Action
  | uiCurrentTagPanelAppearsAtEdited.Action
  | uiCurrentTagPanelDisappearsAtEdited.Action
  | uiCurrentTagPanelTraceVisibilityCheckboxToggled.Action;

type ReducersRegister = {
  [P in Action['type']]: Reducer<P, State, Action['payload']>;
};

export const reducersRegister: ReducersRegister = {
  ...sagaReducersRegister,
  ...uiNewTabButtonClicked.reducer,
  ...uiTagListRowDeleteButtonClicked.reducer,
  ...uiTagListRowSaveButtonClicked.reducer,
  ...uiTagListRowClicked.reducer,
  ...uiActiveTagPanelLabelClicked.reducer,
  ...uiPlayerLoaded.reducer,
  ...uiPlayerVideoSeeking.reducer,
  ...uiPlayerVideoDurationChanged.reducer,
  ...uiPlayerVideoSeeked.reducer,
  ...uiPlayerVideoPlayedToTime.reducer,
  ...uiPlayerVideoPlaying.reducer,
  ...uiPlayerVideoPaused.reducer,
  ...uiPlayerSeekpreviewSeeking.reducer,
  ...uiPlayerSeekpreviewSeeked.reducer,
  ...uiPlayerAugmentationMouseDown.reducer,
  ...uiPlayerAugmentationMouseMove.reducer,
  ...uiPlayerAugmentationMouseUp.reducer,
  ...uiPlayerAugmentationTagMouseDown.reducer,
  ...uiPlayerAugmentationTagMouseUp.reducer,
  ...uiPlayerAugmentationTagMouseEnter.reducer,
  ...uiPlayerAugmentationTagMouseOut.reducer,
  ...uiPlayerControlsPlayButtonClicked.reducer,
  ...uiPlayerNewTagLayerClicked.reducer,
  ...uiPlayerSeekbarMouseDown.reducer,
  ...uiPlayerSeekbarMouseMoveDuringSeeking.reducer,
  ...uiPlayerSeekbarMouseUpDuringSeeking.reducer,
  ...uiCurrentTagPanelAppearsAtEdited.reducer,
  ...uiCurrentTagPanelDisappearsAtEdited.reducer,
  ...uiCurrentTagPanelTraceVisibilityCheckboxToggled.reducer
};

const getReducerFromRegister = <T extends Action>(
  register: ReducersRegister,
  action: T
): Reducer<T['type'], State, T['payload']> => register[action.type];

export const reducer = <T extends Action>(
  state: State = DEFAULT_STATE,
  action: T
): State => {
  const actionReducer = getReducerFromRegister(reducersRegister, action);
  if (actionReducer === undefined) return state;
  return actionReducer(state, action);
};
