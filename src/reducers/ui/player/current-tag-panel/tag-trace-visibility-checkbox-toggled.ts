import {
  TAG_TRACE_VISIBILITY_CHECKBOX_TOGGLED,
  TagTraceVisibilityCheckboxToggledType,
  TagTraceVisibilityCheckboxToggledPayload
} from '~/actions';
import { State } from '~/types';
import createReducer from '~/utils/create-reducer';
import { createPartialReducer } from '~/utils/create-partial-reducer';
import { getVisibleTraceTagIDs } from '~/selectors/common';
import { setVisibleTraceTagIDs, setTagTraceVisible } from '~/reducers/base';

const getTagID = (
  state: State,
  { tagID }: TagTraceVisibilityCheckboxToggledPayload
): string => tagID;

const isVisible = (
  state: State,
  { visible }: TagTraceVisibilityCheckboxToggledPayload
): boolean => visible;

const calculateVisibleTraceTagIDs = (
  tagID: string,
  visible: boolean,
  prevVisibleTraceTagIDs: string[]
): string[] => setTagTraceVisible(prevVisibleTraceTagIDs, tagID, visible);

const partialReducers = [
  createPartialReducer(
    getVisibleTraceTagIDs,
    setVisibleTraceTagIDs,
    calculateVisibleTraceTagIDs,
    [getTagID, isVisible, getVisibleTraceTagIDs]
  )
];

export default {
  actionType: TAG_TRACE_VISIBILITY_CHECKBOX_TOGGLED,
  reducer: createReducer<
    TagTraceVisibilityCheckboxToggledType,
    State,
    TagTraceVisibilityCheckboxToggledPayload
  >(partialReducers)
};
