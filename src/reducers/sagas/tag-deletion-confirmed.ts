import { TAG_DELETION_CONFIRMED } from '~/actions';
import {
  State,
  TagDeletionConfirmedPayload,
  TagDeletionConfirmedType
} from '~/types';
import createReducer from '~/utils/create-reducer';
import { deleteTag, setCurrentTagID } from '~/reducers/base';
import { createPartialReducer } from '~/utils/create-partial-reducer';
import { getCurrentTagID } from '~/selectors/common';

const getTagID = (
  state: State,
  { tagID }: TagDeletionConfirmedPayload
): string => tagID;

const calculateTagIDToDelete = (ID: string): string => ID;

const calculateCurrentTagID = (
  tagToRemoveID: string,
  prevCurrentTagID: string
): string =>
  tagToRemoveID === prevCurrentTagID ? undefined : prevCurrentTagID;

const partialReducers = [
  createPartialReducer(
    (): string => undefined,
    deleteTag,
    calculateTagIDToDelete,
    [getTagID]
  ),
  createPartialReducer(
    getCurrentTagID,
    setCurrentTagID,
    calculateCurrentTagID,
    [getTagID, getCurrentTagID]
  )
];

export default {
  actionType: TAG_DELETION_CONFIRMED,
  reducer: createReducer<
    TagDeletionConfirmedType,
    State,
    TagDeletionConfirmedPayload
  >(partialReducers)
};
