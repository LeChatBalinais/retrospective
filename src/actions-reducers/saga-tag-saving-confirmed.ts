import { ActionTemplate } from '~/utils/action-template';
import { State } from '~/state';
import createReducer from '~/utils/create-reducer';
import { setTagGlobalID } from '~/setters/tags';
import { createPartialReducer } from '~/utils/create-partial-reducer';
import { getTagGlobalID } from '~/getters/tags';
import { makeActionCreator } from '~/utils/make-action-creator';

export type ActionID = 'SAGA_TAG_SAVING_CONFIRMED';
export const ACTION_ID = 'SAGA_TAG_SAVING_CONFIRMED';

export interface Payload {
  tagID: string;
  tagGlobalID: string;
}

export type Action = ActionTemplate<ActionID, Payload>;

export const actionCreator = makeActionCreator<ActionID, Payload>(ACTION_ID);

const getNewTagGlobalID = (state: State, { tagGlobalID }: Payload): string =>
  tagGlobalID;

const getPrevTagGlobalID = (state: State, { tagID }: Payload): string =>
  getTagGlobalID(state, tagID);

const setNewTagGlobalID = (
  state: State,
  globalID: string,
  { tagID }: Payload
): State => setTagGlobalID(state, tagID, globalID);

const calculateTagGlobalID = (globalID: string): string => globalID;

const partialReducers = [
  createPartialReducer(
    getPrevTagGlobalID,
    setNewTagGlobalID,
    calculateTagGlobalID,
    [getNewTagGlobalID]
  )
];

export const reducer = {
  [ACTION_ID]: createReducer<ActionID, State, Payload>(partialReducers)
};
