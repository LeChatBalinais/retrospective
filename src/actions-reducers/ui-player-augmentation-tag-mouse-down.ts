import { ActionTemplate } from '~/utils/action-template';
import { makeActionCreator } from '~/utils/make-action-creator';
import { State, PlaybackStatus } from '~/state';
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

export type ActionID = 'MOUSE_DOWN_ON_TAG';
export const ACTION_ID = 'MOUSE_DOWN_ON_TAG';

export interface Payload {
  tagID: string;
}

export type Action = ActionTemplate<ActionID, Payload>;

export const actionCreator = makeActionCreator<ActionID, Payload>(ACTION_ID);

const getTagID = (state: State, { tagID }: Payload): string => tagID;

const calculateCurrentTagID = (tagID: string): string => tagID;

const calculateTagBeingEditedID = (tagID: string): string => tagID;

const calculatePlaybackStatus = (
  currentTagID: string,
  prevPlaybackStatus: PlaybackStatus
): PlaybackStatus =>
  currentTagID === undefined ? prevPlaybackStatus : PlaybackStatus.Playing;

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
    [getCurrentTagID, getPlaybackStatus]
  )
];

export const reducer = {
  [ACTION_ID]: createReducer<ActionID, State>(partialReducers)
};
