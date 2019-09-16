import {
  TAG_ROW_CLICKED,
  TagRowClickedPayload,
  TagRowClickedType
} from '~/actions/ui/tag-list';
import { State, SeekingStatus, PlaneTimePoint } from '~/types';
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

const getTagID = (state: State, { tagID }: TagRowClickedPayload): string =>
  tagID;

const getPath = (
  state: State,
  { tagID }: TagRowClickedPayload
): PlaneTimePoint[] => getTagPath(state, tagID);

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

export default {
  actionType: TAG_ROW_CLICKED,
  reducer: createReducer<TagRowClickedType, State, TagRowClickedPayload>(
    partialReducers
  )
};
