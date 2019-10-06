import { ActionTemplate } from '~/utils/action-template';
import { makeActionCreator } from '~/utils/make-action-creator';
import { State, SeekingStatus, PlaneTimePoint } from '~/state';
import createReducer from '~/utils/create-reducer';
import { getCurrentTagID, getVideoDuration } from '~/selectors/selectors';
import {
  setCurrentTagID,
  setLastRequestedStage,
  setSeekingStatus
} from '~/reducers/base';
import { createPartialReducer } from '~/utils/create-partial-reducer';
import {
  getLastRequestedStage,
  getStageVideoAt,
  getTagPath,
  getSeekingStatus
} from '~/selectors/common';

export type ActionID = 'TAG_ROW_CLICKED';
export const ACTION_ID = 'TAG_ROW_CLICKED';

export interface Payload {
  tagID: string;
}

export type Action = ActionTemplate<ActionID, Payload>;

export const actionCreator = makeActionCreator<ActionID, Payload>(ACTION_ID);

const getTagID = (state: State, { tagID }: Payload): string => tagID;

const getPath = (state: State, { tagID }: Payload): PlaneTimePoint[] =>
  getTagPath(state, tagID);

const calculateCurrentTagID = (tagID: string): string => tagID;

const calculateLastRequestedStage = (
  stageVideoAt: number,
  path: PlaneTimePoint[],
  duration: number,
  prevLastRequestedStage: number
): number => {
  if (path.length === 0) return prevLastRequestedStage;

  const lastRequestedStage = path[0].time / duration;

  if (lastRequestedStage === stageVideoAt) return undefined;

  return lastRequestedStage;
};

const calculateSeekingStatus = (
  stageVideoAt: number,
  path: PlaneTimePoint[],
  duration: number,
  prevSeekingStatus: SeekingStatus
): SeekingStatus => {
  if (path.length === 0) return prevSeekingStatus;
  const lastRequestedStage = path[0].time / duration;

  if (lastRequestedStage === stageVideoAt) return prevSeekingStatus;

  return SeekingStatus.Seeking;
};

const partialReducers = [
  createPartialReducer(
    getCurrentTagID,
    setCurrentTagID,
    calculateCurrentTagID,
    [getTagID]
  ),
  createPartialReducer(
    getLastRequestedStage,
    setLastRequestedStage,
    calculateLastRequestedStage,
    [getStageVideoAt, getPath, getVideoDuration, getLastRequestedStage]
  ),
  createPartialReducer(
    getSeekingStatus,
    setSeekingStatus,
    calculateSeekingStatus,
    [getStageVideoAt, getPath, getVideoDuration, getSeekingStatus]
  )
];

export const reducer = {
  [ACTION_ID]: createReducer<ActionID, State, Payload>(partialReducers)
};
