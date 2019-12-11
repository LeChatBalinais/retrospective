import { ActionTemplate } from '~/utils/action-template';
import { State, Tag, Tags } from '~/state';
import { createReducer } from '~/utils/create-reducer';
import { makeActionCreator } from '~/utils/make-action-creator';
import { mapStateToDeterminer } from '~/utils/map-state-to-determiner';
import { makeElementGlobal } from '~/setters/global-entity-table';
import { setTags } from '~/setters/entities';
import { getTagsTable } from '~/getters/entities';
import { getHighlightedTagID } from '~/getters/player';
import { setHighlightedTagID } from '~/setters/player';
import { getCurrentTagID } from '~/getters/tag-editor';
import { setCurrentTagID } from '~/setters/tag-editor';

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

const calculateTags = (prevTags: Tags, ID: string, globalID: string): Tags =>
  makeElementGlobal<Tag>(prevTags, ID, globalID);

const calculateHighlightedTagID = (
  prevHighlightedTagID: string,
  ID: string,
  globalID: string
): string => (prevHighlightedTagID === ID ? globalID : prevHighlightedTagID);

const calculateCurrentTagID = (
  prevCurrentTagID: string,
  ID: string,
  globalID: string
): string => (prevCurrentTagID === ID ? globalID : prevCurrentTagID);

export const reducer = createReducer(ACTION_ID, [
  [
    getTagsTable,
    setTags,
    mapStateToDeterminer(calculateTags, [
      getTagsTable,
      getTagID,
      getTagGlobalID
    ])
  ],
  [
    getHighlightedTagID,
    setHighlightedTagID,
    mapStateToDeterminer(calculateHighlightedTagID, [
      getHighlightedTagID,
      getTagID,
      getTagGlobalID
    ])
  ],
  [
    getCurrentTagID,
    setCurrentTagID,
    mapStateToDeterminer(calculateCurrentTagID, [
      getCurrentTagID,
      getTagID,
      getTagGlobalID
    ])
  ]
]);
