import { ActionTemplate } from '~/types/action-template';

export type NewTagButtonClickedType = 'NEW_TAG_BUTTON_CLICKED';

export type NewTagButtonClicked = ActionTemplate<
  NewTagButtonClickedType,
  {}
>;

export const NEW_TAG_BUTTON_CLICKED = 'NEW_TAG_BUTTON_CLICKED';

export function newTagButtonClicked(): NewTagButtonClicked {
  return { type: NEW_TAG_BUTTON_CLICKED, payload: {} };
}
