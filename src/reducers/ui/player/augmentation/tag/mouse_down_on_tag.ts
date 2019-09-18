import { MOUSE_DOWN_ON_TAG } from '~/actions';
import {
  MouseDownOnTagType,
  MouseDownOnTagPayload,
  State,
  PlaybackStatus
} from '~/types';
import createReducer from '~/utils/create-reducer';
import { createPartialReducer } from '~/utils/create-partial-reducer';
import {
  getPlaybackStatus,
  getTagBeingEditedID,
  getCurrentTagID
} from '~/selectors/common';
import {
  setPlaybackStatus,
  setTagBeingEditedID,
  setCurrentTagID
} from '~/reducers/base';

const getTagID = (state: State, { tagID }: MouseDownOnTagPayload): string =>
  tagID;

const calculateCurrentTagID = (tagID: string): string => tagID;

const calculateTagBeingEditedID = (tagID: string): string => tagID;

const calculatePlaybackStatus = (
  tagBeingEditedID: string,
  prevPlaybackStatus: PlaybackStatus
): PlaybackStatus =>
  tagBeingEditedID === undefined ? prevPlaybackStatus : PlaybackStatus.Playing;

const partialReducers = [
  createPartialReducer(
    getCurrentTagID,
    setCurrentTagID,
    calculateCurrentTagID,
    [getTagID]
  ),
  createPartialReducer(
    getTagBeingEditedID,
    setTagBeingEditedID,
    calculateTagBeingEditedID,
    [getTagID]
  ),
  createPartialReducer(
    getPlaybackStatus,
    setPlaybackStatus,
    calculatePlaybackStatus,
    [getTagBeingEditedID, getPlaybackStatus]
  )
];

export default {
  actionType: MOUSE_DOWN_ON_TAG,
  reducer: createReducer<MouseDownOnTagType, State, MouseDownOnTagPayload>(
    partialReducers
  )
};
