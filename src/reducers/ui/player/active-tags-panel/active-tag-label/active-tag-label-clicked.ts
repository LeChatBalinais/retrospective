import {
  ActiveTagLabelClickedPayload,
  ActiveTagLabelClickedType,
  ACTIVE_TAG_LABEL_CLICKED
} from '~/actions';
import { State } from '~/types';
import createReducer from '~/utils/create-reducer';
import { getCurrentTagID } from '~/selectors/selectors';
import { setCurrentTagID } from '~/reducers/base';
import { createPartialReducer } from '~/utils/create-partial-reducer';

const getTagID = (
  state: State,
  { tagID }: ActiveTagLabelClickedPayload
): string => tagID;

const calculateCurrentTagID = (tagID: string): string => tagID;

const partialReducers = [
  createPartialReducer(
    getCurrentTagID,
    setCurrentTagID,
    calculateCurrentTagID,
    [getTagID]
  )
];

export default {
  actionType: ACTIVE_TAG_LABEL_CLICKED,
  reducer: createReducer<
    ActiveTagLabelClickedType,
    State,
    ActiveTagLabelClickedPayload
  >(partialReducers)
};
