import { ActionTemplate } from '~/utils/action-template';
import { makeActionCreator } from '~/utils/make-action-creator';
import { State } from '~/state';
import { createReducer } from '~/utils/experimental/create-reducer';
import { getCurrentTagID } from '~/getters/tag-editor';
import { setCurrentTagID } from '~/setters/tag-editor';
import { mapStateToDeterminer } from '~/utils/experimental/map-state-to-determiner';

export type ActionID = 'ACTIVE_TAG_LABEL_CLICKED';
export const ACTION_ID = 'ACTIVE_TAG_LABEL_CLICKED';

export interface Payload {
  tagID: string;
}

export type Action = ActionTemplate<ActionID, Payload>;

export const actionCreator = makeActionCreator<ActionID, Payload>(ACTION_ID);

const getTagID = (state: State, { tagID }: Payload): string => tagID;

const getNewCurrentTagID = (tagID: string): string => tagID;

export const reducer = createReducer(ACTION_ID, [
  [
    getCurrentTagID,
    setCurrentTagID,
    mapStateToDeterminer(getNewCurrentTagID, [getTagID])
  ]
]);
