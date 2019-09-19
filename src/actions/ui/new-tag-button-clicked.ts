import { SimpleActionTemplate } from '~/types/actions/simple-action-template';

export type NewTagButtonClickedType = 'NEW_TAG_BUTTON_CLICKED';

export type NewTagButtonClicked = SimpleActionTemplate<
  NewTagButtonClickedType,
  {}
>;

export const NEW_TAG_BUTTON_CLICKED = 'NEW_TAG_BUTTON_CLICKED';

export function newTagButtonClicked(): NewTagButtonClicked {
  return { type: NEW_TAG_BUTTON_CLICKED, payload: {} };
}
