import { NEW_TAG_BUTTON_CLICKED, NewTagButtonClickedType } from '~/actions';
import { State } from '~/types';
import createReducer from '~/utils/create-reducer';
import { createPartialReducer } from '~/utils/create-partial-reducer';
import { getPlacingNewTagMode } from '~/selectors/common';
import { setPlacingNewTagMode } from '~/reducers/base';

const calculateIsUserPlacingNewTag = (
  prevIsUserPlacingNewTagMode: boolean
): boolean => !prevIsUserPlacingNewTagMode;

const partialReducers = [
  createPartialReducer(
    getPlacingNewTagMode,
    setPlacingNewTagMode,
    calculateIsUserPlacingNewTag,
    [getPlacingNewTagMode]
  )
];

export default {
  actionType: NEW_TAG_BUTTON_CLICKED,
  reducer: createReducer<NewTagButtonClickedType, State>(partialReducers)
};
