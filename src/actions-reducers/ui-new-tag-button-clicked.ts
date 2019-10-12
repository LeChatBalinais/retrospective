import { ActionTemplate } from '~/utils/action-template';
import { makeActionCreator } from '~/utils/make-action-creator';
import { State } from '~/state';
import createReducer from '~/utils/create-reducer';
import { createPartialReducer } from '~/utils/create-partial-reducer';
import { isPlaceNewTagModeOn } from '~/getters/tag-editor';
import { setPlacingNewTagMode } from '~/setters/tag-editor';

export type ActionID = 'UI_NEW_TAG_BUTTON_CLICKED';

export const ACTION_ID = 'UI_NEW_TAG_BUTTON_CLICKED';

export type Action = ActionTemplate<ActionID>;

export const actionCreator = makeActionCreator<ActionID>(ACTION_ID);

const calculateIsUserPlacingNewTag = (
  prevIsUserPlacingNewTagMode: boolean
): boolean => !prevIsUserPlacingNewTagMode;

const partialReducers = [
  createPartialReducer(
    isPlaceNewTagModeOn,
    setPlacingNewTagMode,
    calculateIsUserPlacingNewTag,
    [isPlaceNewTagModeOn]
  )
];

export const reducer = {
  [ACTION_ID]: createReducer<ActionID, State>(partialReducers)
};
