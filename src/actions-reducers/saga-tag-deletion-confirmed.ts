import { ActionTemplate } from '~/utils/action-template';
import { makeActionCreator } from '~/utils/make-action-creator';
import { createReducer } from '~/utils/experimental/create-reducer';
import { State } from '~/state';
import { setCurrentTagID } from '~/setters/tag-editor';
import { deleteTag } from '~/setters/tags';
import { getDefaultReducedVal } from '~/utils/create-partial-reducer';
import { getCurrentTagID } from '~/getters/tag-editor';
import { mapStateToDeterminer } from '~/utils/experimental/map-state-to-determiner';

type ActionID = 'SAGA_TAG_DELETION_CONFIRMED';
export const ACTION_ID = 'SAGA_TAG_DELETION_CONFIRMED';

interface Payload {
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
