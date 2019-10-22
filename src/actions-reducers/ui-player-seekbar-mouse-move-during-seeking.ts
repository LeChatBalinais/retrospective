import { ActionTemplate } from '~/utils/action-template';
import { makeActionCreator } from '~/utils/make-action-creator';
import { State } from '~/state';
import createReducer from '~/utils/create-reducer';
import { createPartialReducer } from '~/utils/create-partial-reducer';
import { getLastRequestedStage, getStageVideoAt } from '~/getters/player';
import { setLastRequestedStage } from '~/setters/player';
import { timeIsCloseEnough } from '~/utils/time-is-close-enough';

export type ActionID = 'MOUSE_MOVE_DURING_SEEKBAR_SEEKING';
export const ACTION_ID = 'MOUSE_MOVE_DURING_SEEKBAR_SEEKING';

export interface Payload {
  position: number;
}

export type Action = ActionTemplate<ActionID, Payload>;

export const actionCreator = makeActionCreator<ActionID, Payload>(ACTION_ID);

const getPosition = (state: State, { position }: Payload): number => position;

const calculateLastRequestedStage = (
  position: number,
  stageVideoAt: number
): number => (timeIsCloseEnough(stageVideoAt, position) ? undefined : position);

const partialReducers = [
  createPartialReducer(
    getLastRequestedStage,
    setLastRequestedStage,
    calculateLastRequestedStage,
    [getPosition, getStageVideoAt]
  )
];

export const reducer = {
  [ACTION_ID]: createReducer<ActionID, State, Payload>(partialReducers)
};
