import { ActionTemplate } from '~/utils/action-template';
import { makeActionCreator } from '~/utils/make-action-creator';
import { createReducer } from '~/utils/create-reducer';
import { mapStateToDeterminer } from '~/utils/map-state-to-determiner';
import { State } from '~/state';
import { setHighlightedTagID } from '~/setters/player';
import { getHighlightedTagID } from '~/getters/player';

export type ActionID = 'UI_PLAYER_AUGMENTATION_TAG_MOUSE_OUT';
export const ACTION_ID = 'UI_PLAYER_AUGMENTATION_TAG_MOUSE_OUT';

export interface Payload {
  tagID: string;
}

export type Action = ActionTemplate<ActionID, Payload>;

export const actionCreator = makeActionCreator<ActionID, Payload>(ACTION_ID);

const getTagID = (state: State, { tagID }: Payload): string => tagID;

const getNewHighlightedTagID = (
  tagID: string,
  prevHighlightedTagID: string
): string =>
  tagID === prevHighlightedTagID ? undefined : prevHighlightedTagID;

export const reducer = createReducer(ACTION_ID, [
  [
    getHighlightedTagID,
    setHighlightedTagID,
    mapStateToDeterminer(getNewHighlightedTagID, [
      getTagID,
      getHighlightedTagID
    ])
  ]
]);
