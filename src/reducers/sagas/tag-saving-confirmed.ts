import { TAG_SAVING_CONFIRMED } from '~/actions';
import {
  State,
  TagSavingConfirmedPayload,
  TagSavingConfirmedType
} from '~/types';
import createReducer from '~/utils/create-reducer';
import { setTagGlobalID } from '~/reducers/base';
import { createPartialReducer } from '~/utils/create-partial-reducer';
import { getTagGlobalID } from '~/selectors/common';

const getNewTagGlobalID = (
  state: State,
  { tagGlobalID }: TagSavingConfirmedPayload
): string => tagGlobalID;

const getPrevTagGlobalID = (
  state: State,
  { tagID }: TagSavingConfirmedPayload
): string => getTagGlobalID(state, tagID);

const setNewTagGlobalID = (
  state: State,
  globalID: string,
  { tagID }: TagSavingConfirmedPayload
): State => setTagGlobalID(state, tagID, globalID);

const calculateTagGlobalID = (globalID: string): string => globalID;

const partialReducers = [
  createPartialReducer(
    getPrevTagGlobalID,
    setNewTagGlobalID,
    calculateTagGlobalID,
    [getNewTagGlobalID]
  )
];

export default {
  actionType: TAG_SAVING_CONFIRMED,
  reducer: createReducer<
    TagSavingConfirmedType,
    State,
    TagSavingConfirmedPayload
  >(partialReducers)
};
