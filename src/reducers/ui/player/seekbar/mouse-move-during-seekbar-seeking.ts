import {
  MOUSE_MOVE_DURING_SEEKBAR_SEEKING,
  MouseMoveDuringSeekbarSeekingPayload,
  MouseMoveDuringSeekbarSeekingType
} from '~/actions';
import { State } from '~/types';
import createReducer from '~/utils/create-reducer';
import { createPartialReducer } from '~/utils/create-partial-reducer';
import { getLastRequestedStage } from '~/selectors/common';
import { setLastRequestedStage } from '~/reducers/base';

const getPosition = (
  state: State,
  { position }: MouseMoveDuringSeekbarSeekingPayload
): number => position;

const calculateLastRequestedStage = (position: number): number => position;

const partialReducers = [
  createPartialReducer(
    getLastRequestedStage,
    setLastRequestedStage,
    calculateLastRequestedStage,
    [getPosition]
  )
];

export default {
  actionType: MOUSE_MOVE_DURING_SEEKBAR_SEEKING,
  reducer: createReducer<
    MouseMoveDuringSeekbarSeekingType,
    State,
    MouseMoveDuringSeekbarSeekingPayload
  >(partialReducers)
};
