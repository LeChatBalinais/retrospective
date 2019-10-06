import { ActionTemplate } from '~/utils/action-template';
import { makeActionCreator } from '~/utils/make-action-creator';
import { State, PlaybackStatus } from '~/state';
import createReducer from '~/utils/create-reducer';
import { createPartialReducer } from '~/utils/create-partial-reducer';
import {
  getPlaybackStatus,
  getPlacingNewTagMode,
  getStageVideoAt
} from '~/selectors/common';
import {
  setPlaybackStatus,
  setPlacingNewTagMode,
  addNewTag
} from '~/reducers/base';
import { getVideoDuration } from '~/selectors/selectors';

export type ActionID = 'NEW_TAG_LAYER_CLICKED';
export const ACTION_ID = 'NEW_TAG_LAYER_CLICKED';

export interface Payload {
  x: number;
  y: number;
}

export type Action = ActionTemplate<ActionID, Payload>;

export const actionCreator = makeActionCreator<ActionID, Payload>(ACTION_ID);

const getPosition = (
  state: State,
  { x, y }: Payload
): { x: number; y: number } => ({ x, y });

const calculatePlaybackStatus = (): PlaybackStatus => PlaybackStatus.Paused;

const calculatePlacingNewTagMode = (): boolean => false;

const calculateTag = (
  stage: number,
  duration: number,
  { x, y }: { x: number; y: number }
): { time: number; x: number; y: number } => {
  return { time: stage * duration, x, y };
};

const partialReducers = [
  createPartialReducer(
    getPlaybackStatus,
    setPlaybackStatus,
    calculatePlaybackStatus
  ),
  createPartialReducer(
    getPlacingNewTagMode,
    setPlacingNewTagMode,
    calculatePlacingNewTagMode
  ),
  createPartialReducer(
    (): { time: number; x: number; y: number } => undefined,
    addNewTag,
    calculateTag,
    [getStageVideoAt, getVideoDuration, getPosition]
  )
];

export const reducer = {
  [ACTION_ID]: createReducer<ActionID, State, Payload>(partialReducers)
};
