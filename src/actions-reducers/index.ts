import {
  Action as SagaTagDeletionConfirmed,
  reducer as sagaTagDeletionConfirmedReducer
} from './saga-tag-deletion-confirmed';
import {
  Action as SagaTagSavingConfirmed,
  reducer as sagaTagSavingConfirmedReducer
} from './saga-tag-saving-confirmed';
import {
  Action as SagaTagsFetchingFetched,
  reducer as sagaTagsFetchingFetched
} from './saga-tags-fetching-fetched';
import {
  Action as UiNewTabButtonClicked,
  reducer as uiNewTabButtonClicked
} from './ui-new-tag-button-clicked';
import { Action as UiTagListRowDeleteButtonClicked } from './ui-tag-list-row-delete-button-clicked';
import { Action as UiTagListRowSaveButtonClicked } from './ui-tag-list-row-save-button-clicked';
import {
  Action as UiTagListRowClicked,
  reducer as uiTagListRowClicked
} from './ui-tag-list-row-clicked';
import {
  Action as UiActiveTagPanelLabelClicked,
  reducer as uiActiveTagPanelLabelClicked
} from './ui-active-tag-panel-label-clicked';
import { Action as UiPlayerLoaded } from './ui-player-loaded';
import {
  Action as UiPlayerVideoSeeking,
  reducer as uiPlayerVideoSeeking
} from './ui-player-video-seeking';
import {
  Action as UiPlayerVideoSeeked,
  reducer as uiPlayerVideoSeeked
} from './ui-player-video-seeked';
import {
  Action as UiPlayerVideoDurationChanged,
  reducer as uiPlayerVideoDurationChanged
} from './ui-player-video-duration-changed';
import {
  Action as UiPlayerVideoPlayedToTime,
  reducer as uiPlayerVideoPlayedToTime
} from './ui-player-video-played-to-time';

import {
  Action as UiPlayerAugmentationMouseDown,
  reducer as uiPlayerAugmentationMouseDown
} from './ui-player-augmentation-mouse-down';

import {
  Action as UiPlayerAugmentationMouseMove,
  reducer as uiPlayerAugmentationMouseMove
} from './ui-player-augmentation-mouse-move';

import {
  Action as UiPlayerAugmentationMouseUp,
  reducer as uiPlayerAugmentationMouseUp
} from './ui-player-augmentation-mouse-up';

import {
  Action as UiPlayerAugmentationTagMouseDown,
  reducer as uiPlayerAugmentationTagMouseDown
} from './ui-player-augmentation-tag-mouse-down';

import {
  Action as UiPlayerAugmentationTagMouseUp,
  reducer as uiPlayerAugmentationTagMouseUp
} from './ui-player-augmentation-tag-mouse-up';

import {
  Action as UiPlayerControlsPlayButtonClicked,
  reducer as uiPlayerControlsPlayButtonClicked
} from './ui-player-play-button-clicked';

import {
  Action as UiPlayerNewTagLayerClicked,
  reducer as uiPlayerNewTagLayerClicked
} from './ui-player-new-tag-layer-clicked';

import {
  Action as UiPlayerSeekbarMouseDown,
  reducer as uiPlayerSeekbarMouseDown
} from './ui-player-seekbar-mouse-down';

import {
  Action as UiPlayerSeekbarMouseMoveDuringSeeking,
  reducer as uiPlayerSeekbarMouseMoveDuringSeeking
} from './ui-player-seekbar-mouse-move-during-seeking';

import {
  Action as UiPlayerSeekbarMouseUpDuringSeeking,
  reducer as uiPlayerSeekbarMouseUpDuringSeeking
} from './ui-player-seekbar-mouse-up-during-seeking';

import {
  Action as UiCurrentTagPanelAppearsAtEdited,
  reducer as uiCurrentTagPanelAppearsAtEdited
} from './ui-current-tag-panel-appears-at-edited';

import {
  Action as UiCurrentTagPanelDisappearsAtEdited,
  reducer as uiCurrentTagPanelDisappearsAtEdited
} from './ui-current-tag-panel-disappears-at-edited';

import {
  Action as UiCurrentTagPanelTraceVisibilityCheckboxToggled,
  reducer as uiCurrentTagPanelTraceVisibilityCheckboxToggled
} from './ui-current-tag-panel-trace-visibility-checkbox-toggled';

export type Action =
  | SagaTagDeletionConfirmed
  | SagaTagSavingConfirmed
  | SagaTagsFetchingFetched
  | UiNewTabButtonClicked
  | UiTagListRowDeleteButtonClicked
  | UiTagListRowSaveButtonClicked
  | UiTagListRowClicked
  | UiActiveTagPanelLabelClicked
  | UiPlayerLoaded
  | UiPlayerVideoSeeking
  | UiPlayerVideoDurationChanged
  | UiPlayerVideoSeeked
  | UiPlayerVideoPlayedToTime
  | UiPlayerAugmentationMouseDown
  | UiPlayerAugmentationMouseMove
  | UiPlayerAugmentationMouseUp
  | UiPlayerAugmentationTagMouseDown
  | UiPlayerAugmentationTagMouseUp
  | UiPlayerControlsPlayButtonClicked
  | UiPlayerNewTagLayerClicked
  | UiPlayerSeekbarMouseDown
  | UiPlayerSeekbarMouseMoveDuringSeeking
  | UiPlayerSeekbarMouseUpDuringSeeking
  | UiCurrentTagPanelAppearsAtEdited
  | UiCurrentTagPanelDisappearsAtEdited
  | UiCurrentTagPanelTraceVisibilityCheckboxToggled;

export const reducers = {
  ...sagaTagDeletionConfirmedReducer,
  ...sagaTagSavingConfirmedReducer,
  ...sagaTagsFetchingFetched,
  ...uiNewTabButtonClicked,
  ...uiTagListRowClicked,
  ...uiActiveTagPanelLabelClicked,
  ...uiPlayerVideoSeeking,
  ...uiPlayerVideoDurationChanged,
  ...uiPlayerVideoSeeked,
  ...uiPlayerVideoPlayedToTime,
  ...uiPlayerAugmentationMouseDown,
  ...uiPlayerAugmentationMouseMove,
  ...uiPlayerAugmentationMouseUp,
  ...uiPlayerAugmentationTagMouseDown,
  ...uiPlayerAugmentationTagMouseUp,
  ...uiPlayerControlsPlayButtonClicked,
  ...uiPlayerNewTagLayerClicked,
  ...uiPlayerSeekbarMouseDown,
  ...uiPlayerSeekbarMouseMoveDuringSeeking,
  ...uiPlayerSeekbarMouseUpDuringSeeking,
  ...uiCurrentTagPanelAppearsAtEdited,
  ...uiCurrentTagPanelDisappearsAtEdited,
  ...uiCurrentTagPanelTraceVisibilityCheckboxToggled
};
