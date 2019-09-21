import { ActionTemplate } from '~/types/action-template';

export type DeleteTagButtonClickedType = 'DELETE_TAG_BUTTON_CLICKED';

export interface DeleteTagButtonClickedPayload {
  tagID: string;
}

export type DeleteTagButtonClicked = ActionTemplate<
  DeleteTagButtonClickedType,
  DeleteTagButtonClickedPayload
>;

export const DELETE_TAG_BUTTON_CLICKED = 'DELETE_TAG_BUTTON_CLICKED';

export function deleteTagButtonClicked(
  payload: DeleteTagButtonClickedPayload
): DeleteTagButtonClicked {
  return { type: DELETE_TAG_BUTTON_CLICKED, payload };
}
