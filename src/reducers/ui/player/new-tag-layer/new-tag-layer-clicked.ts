import {
  NEW_TAG_LAYER_CLICKED,
  NewTagLayerClickedType,
  NewTagLayerClickedPayload
} from '~/actions';
import { State, PlaybackStatus } from '~/types';
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

const getPosition = (
  state: State,
  { x, y }: NewTagLayerClickedPayload
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

export default {
  actionType: NEW_TAG_LAYER_CLICKED,
  reducer: createReducer<
    NewTagLayerClickedType,
    State,
    NewTagLayerClickedPayload
  >(partialReducers)
};
