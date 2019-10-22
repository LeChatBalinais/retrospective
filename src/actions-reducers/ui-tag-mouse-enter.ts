import { ActionTemplate } from '~/utils/action-template';
import { makeActionCreator } from '~/utils/make-action-creator';
import { State } from '~/state';
import createReducer from '~/utils/create-reducer';
import { createPartialReducer } from '~/utils/create-partial-reducer';
import { setHighlightedTagID } from '~/setters/player';
import { getHighlightedTagID } from '~/getters/player';

export type ActionID = 'UI_PLAYER_AUGMENTATION_TAG_MOUSE_ENTER';
export const ACTION_ID = 'UI_PLAYER_AUGMENTATION_TAG_MOUSE_ENTER';

export interface Payload {
  tagID: string;
}

export type Action = ActionTemplate<ActionID, Payload>;

export const actionCreator = makeActionCreator<ActionID, Payload>(ACTION_ID);

const getTagID = (state: State, { tagID }: Payload): string => tagID;

const calculateHighlightedTagID = (tagID: string): string => tagID;

const partialReducers = [
  createPartialReducer(
    getHighlightedTagID,
    setHighlightedTagID,
    calculateHighlightedTagID,
    [getTagID]
  )
];

export const reducer = {
  [ACTION_ID]: createReducer<ActionID, State>(partialReducers)
};
