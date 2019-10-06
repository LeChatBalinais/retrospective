import { ActionTemplate } from '~/utils/action-template';
import { makeActionCreator } from '~/utils/make-action-creator';
import { State } from '~/state';
import createReducer from '~/utils/create-reducer';
import { createPartialReducer } from '~/utils/create-partial-reducer';
import { getCurrentTagID } from '~/selectors/common';
import { setCurrentTagID } from '~/reducers/base';

export type ActionID = 'UI_PLAYER_AUGMENTATION_MOUSE_DOWN';
export const ACTION_ID = 'UI_PLAYER_AUGMENTATION_MOUSE_DOWN';

export type Action = ActionTemplate<ActionID>;

export const actionCreator = makeActionCreator<ActionID>(ACTION_ID);

const calculateCurrentTagID = (): string => undefined;

const partialReducers = [
  createPartialReducer(getCurrentTagID, setCurrentTagID, calculateCurrentTagID)
];

export const reducer = {
  [ACTION_ID]: createReducer<ActionID, State>(partialReducers)
};
