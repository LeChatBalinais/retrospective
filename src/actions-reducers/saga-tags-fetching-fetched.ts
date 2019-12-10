import { ActionTemplate } from '~/utils/action-template';
import { State, Tags, Tag, GlobalEntityTable } from '~/state';
import { createReducer } from '~/utils/create-reducer';
import { setTags } from '~/setters/entities';
import { getTagsTable } from '~/getters/entities';
import { makeActionCreator } from '~/utils/make-action-creator';
import { mapStateToDeterminer } from '~/utils/map-state-to-determiner';

export type ActionID = 'SAGA_TAGS_FETCHED';

export const ACTION_ID = 'SAGA_TAGS_FETCHED';

export interface Payload {
  tags: GlobalEntityTable<Tag>;
}

export type Action = ActionTemplate<ActionID, Payload>;

export const actionCreator = makeActionCreator<ActionID, Payload>(ACTION_ID);

const getTags = (state: State, { tags }: Payload): Tags => tags;

const getNewTags = (tags: Tags): Tags => tags;

export const reducer = createReducer(ACTION_ID, [
  [getTagsTable, setTags, mapStateToDeterminer(getNewTags, [getTags])]
]);
