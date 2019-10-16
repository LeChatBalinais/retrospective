import { ActionTemplate } from '~/utils/action-template';
import { State, Tags, Table, Tag } from '~/state';
import createReducer from '~/utils/create-reducer';
import { createPartialReducer } from '~/utils/create-partial-reducer';
import { setTags } from '~/setters/entities';
import { getTagsTable } from '~/getters/entities';
import { makeActionCreator } from '~/utils/make-action-creator';

export type ActionID = 'SAGA_TAGS_FETCHED';

export const ACTION_ID = 'SAGA_TAGS_FETCHED';

export interface Payload {
  tags: Table<Tag>;
}

export type Action = ActionTemplate<ActionID, Payload>;

export const actionCreator = makeActionCreator<ActionID, Payload>(ACTION_ID);

const getTags = (state: State, { tags }: Payload): Tags => tags;

const calculateTags = (tags: Tags): Tags => tags;

const partialReducers = [
  createPartialReducer(getTagsTable, setTags, calculateTags, [getTags])
];

export const reducer = {
  [ACTION_ID]: createReducer<ActionID, State, Payload>(partialReducers)
};
