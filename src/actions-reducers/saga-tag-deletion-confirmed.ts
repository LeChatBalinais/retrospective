import { ActionTemplate } from '~/utils/action-template';
import { makeActionCreator } from '~/utils/make-action-creator';
import { createReducer } from '~/utils/create-reducer';
import { State } from '~/state';
import { setCurrentTagID } from '~/setters/tag-editor';
import { deleteTag } from '~/setters/tags';
import { getDefaultReducedVal } from '~/utils/get-default-reduced-val';
import { getCurrentTagID } from '~/getters/tag-editor';
import { mapStateToDeterminer } from '~/utils/map-state-to-determiner';

export type ActionID = 'SAGA_TAG_DELETION_CONFIRMED';
export const ACTION_ID = 'SAGA_TAG_DELETION_CONFIRMED';

export interface Payload {
  tagID: string;
}

export type Action = ActionTemplate<ActionID, Payload>;

export const actionCreator = makeActionCreator<ActionID, Payload>(ACTION_ID);

const getTagID = (state: State, { tagID }: Payload): string => tagID;

const getNewTagIDToDelete = (ID: string): string => ID;

const getNewCurrentTagID = (
  tagToRemoveID: string,
  prevCurrentTagID: string
): string =>
  tagToRemoveID === prevCurrentTagID ? undefined : prevCurrentTagID;

export const reducer = createReducer(ACTION_ID, [
  [
    getDefaultReducedVal,
    deleteTag,
    mapStateToDeterminer(getNewTagIDToDelete, [getTagID])
  ],
  [
    getCurrentTagID,
    setCurrentTagID,
    mapStateToDeterminer(getNewCurrentTagID, [getTagID, getCurrentTagID])
  ]
]);
