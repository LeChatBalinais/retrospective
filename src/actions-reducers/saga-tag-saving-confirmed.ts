import { ActionTemplate } from '~/utils/action-template';
import { State, Tag, Tags } from '~/state';
import { createReducer } from '~/utils/create-reducer';
import { makeActionCreator } from '~/utils/make-action-creator';
import { mapStateToDeterminer } from '~/utils/map-state-to-determiner';
import { makeElementGlobal } from '~/setters/global-entity-table';
import { setTags } from '~/setters/entities';

export type ActionID = 'SAGA_TAG_SAVING_CONFIRMED';
export const ACTION_ID = 'SAGA_TAG_SAVING_CONFIRMED';

export interface Payload {
  tagID: string;
  tagGlobalID: string;
}

export type Action = ActionTemplate<ActionID, Payload>;

export const actionCreator = makeActionCreator<ActionID, Payload>(ACTION_ID);

const getTagGlobalID = (state: State, { tagGlobalID }: Payload): string =>
  tagGlobalID;

const getTagID = (state: State, { tagID }: Payload): string => tagID;

const getPrevTags = ({ entities: { tags } }: State): Tags => tags;

const calculateTags = (prevTags: Tags, ID: string, globalID: string): Tags =>
  makeElementGlobal<Tag>(prevTags, ID, globalID);

export const reducer = createReducer(ACTION_ID, [
  [
    getPrevTags,
    setTags,
    mapStateToDeterminer(calculateTags, [getPrevTags, getTagID, getTagGlobalID])
  ]
]);
