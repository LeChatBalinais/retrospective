import { ActionTemplate } from '~/utils/action-template';
import { makeActionCreator } from '~/utils/make-action-creator';
import { State } from '~/state';
import createReducer from '~/utils/create-reducer';
import { setCurrentTagID } from '~/setters/tag-editor';
import { deleteTag } from '~/setters/tags';
import {
  createPartialReducer,
  getDefaultReducedVal
} from '~/utils/create-partial-reducer';
import { getCurrentTagID } from '~/getters/tag-editor';

type ActionID = 'SAGA_TAG_DELETION_CONFIRMED';
export const ACTION_ID = 'SAGA_TAG_DELETION_CONFIRMED';

interface Payload {
  tagID: string;
}

export type Action = ActionTemplate<ActionID, Payload>;

export const actionCreator = makeActionCreator<ActionID, Payload>(ACTION_ID);

const getTagID = (state: State, { tagID }: Payload): string => tagID;

const calculateTagIDToDelete = (ID: string): string => ID;

const calculateCurrentTagID = (
  tagToRemoveID: string,
  prevCurrentTagID: string
): string =>
  tagToRemoveID === prevCurrentTagID ? undefined : prevCurrentTagID;

const partialReducers = [
  createPartialReducer(
    getDefaultReducedVal,
    deleteTag,
    calculateTagIDToDelete,
    [getTagID]
  ),
  createPartialReducer(
    getCurrentTagID,
    setCurrentTagID,
    calculateCurrentTagID,
    [getTagID, getCurrentTagID]
  )
];

export const reducer = {
  [ACTION_ID]: createReducer<ActionID, State, Payload>(partialReducers)
};
