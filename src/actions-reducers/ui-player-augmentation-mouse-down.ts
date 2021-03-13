import { ActionTemplate } from '~/utils/action-template';
import { makeActionCreator } from '~/utils/make-action-creator';
import { createReducer } from '~/utils/create-reducer';
import { getCurrentTagID } from '~/getters/tag-editor';
import { setCurrentTagID } from '~/setters/tag-editor';
import { mapStateToDeterminer } from '~/utils/map-state-to-determiner';

export type ActionID = 'UI_PLAYER_AUGMENTATION_MOUSE_DOWN';
export const ACTION_ID = 'UI_PLAYER_AUGMENTATION_MOUSE_DOWN';

export type Payload = undefined;

export type Action = ActionTemplate<ActionID>;

export const actionCreator = makeActionCreator<ActionID>(ACTION_ID);

const getNewCurrentTagID = (): string => undefined;

export const reducer = createReducer(ACTION_ID, [
  [getCurrentTagID, setCurrentTagID, mapStateToDeterminer(getNewCurrentTagID)]
]);
