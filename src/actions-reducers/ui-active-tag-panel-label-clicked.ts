import { ActionTemplate } from '~/utils/action-template';
import { makeActionCreator } from '~/utils/make-action-creator';
import { State } from '~/state';
import createReducer from '~/utils/create-reducer';
import { getCurrentTagID } from '~/getters/tag-editor';
import { setCurrentTagID } from '~/setters/tag-editor';
import { createPartialReducer } from '~/utils/create-partial-reducer';

export type ActionID = 'ACTIVE_TAG_LABEL_CLICKED';
export const ACTION_ID = 'ACTIVE_TAG_LABEL_CLICKED';

export interface Payload {
  tagID: string;
}

export type Action = ActionTemplate<ActionID, Payload>;

export const actionCreator = makeActionCreator<ActionID, Payload>(ACTION_ID);

const getTagID = (state: State, { tagID }: Payload): string => tagID;

const calculateCurrentTagID = (tagID: string): string => tagID;

const partialReducers = [
  createPartialReducer(
    getCurrentTagID,
    setCurrentTagID,
    calculateCurrentTagID,
    [getTagID]
  )
];

export const reducer = {
  [ACTION_ID]: createReducer<ActionID, State, Payload>(partialReducers)
};
