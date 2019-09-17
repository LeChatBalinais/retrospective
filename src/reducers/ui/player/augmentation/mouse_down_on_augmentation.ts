import { MOUSE_DOWN_ON_AUGMENTATION } from '~/actions';
import { MouseDownOnAugmentationType, State } from '~/types';
import createReducer from '~/utils/create-reducer';
import { createPartialReducer } from '~/utils/create-partial-reducer';
import { getCurrentTagID } from '~/selectors/common';
import { setCurrentTagID } from '~/reducers/base';

const calculateCurrentTagID = (): string => undefined;

const partialReducers = [
  createPartialReducer(getCurrentTagID, setCurrentTagID, calculateCurrentTagID)
];

export default {
  actionType: MOUSE_DOWN_ON_AUGMENTATION,
  reducer: createReducer<MouseDownOnAugmentationType, State>(partialReducers)
};
