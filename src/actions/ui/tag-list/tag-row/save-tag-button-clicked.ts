import { ActionTemplate } from '~/types/action-template';

export type SaveTagButtonClickedType = 'SAVE_TAG_BUTTON_CLICKED';

export interface SaveTagButtonClickedPayload {
  tagID: string;
}

export type SaveTagButtonClicked = ActionTemplate<
  SaveTagButtonClickedType,
  SaveTagButtonClickedPayload
>;

export const SAVE_TAG_BUTTON_CLICKED = 'SAVE_TAG_BUTTON_CLICKED';

export function saveTagButtonClicked(
  payload: SaveTagButtonClickedPayload
): SaveTagButtonClicked {
  return { type: SAVE_TAG_BUTTON_CLICKED, payload };
}
