import { ActionTemplate } from '~/utils/action-template';
import { makeActionCreator } from '~/utils/make-action-creator';
import { createReducer } from '~/utils/create-reducer';
import { isPlaceNewTagModeOn } from '~/getters/tag-editor';
import { setPlacingNewTagMode } from '~/setters/tag-editor';
import { mapStateToDeterminer } from '~/utils/map-state-to-determiner';

export type ActionID = 'UI_NEW_TAG_BUTTON_CLICKED';

export const ACTION_ID = 'UI_NEW_TAG_BUTTON_CLICKED';

export type Payload = undefined;

export type Action = ActionTemplate<ActionID>;

export const actionCreator = makeActionCreator<ActionID>(ACTION_ID);

const getNewIsUserPlacingNewTag = (
  prevIsUserPlacingNewTagMode: boolean
): boolean => !prevIsUserPlacingNewTagMode;

export const reducer = createReducer(ACTION_ID, [
  [
    isPlaceNewTagModeOn,
    setPlacingNewTagMode,
    mapStateToDeterminer(getNewIsUserPlacingNewTag, [isPlaceNewTagModeOn])
  ]
]);
