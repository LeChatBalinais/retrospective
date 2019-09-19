import { SimpleActionTemplate } from '~/types/actions/simple-action-template';

export type DeleteTagButtonClickedType = 'DELETE_TAG_BUTTON_CLICKED';

export interface DeleteTagButtonClickedPayload {
  tagID: string;
}

export type DeleteTagButtonClicked = SimpleActionTemplate<
  DeleteTagButtonClickedType,
  DeleteTagButtonClickedPayload
>;

export const DELETE_TAG_BUTTON_CLICKED = 'DELETE_TAG_BUTTON_CLICKED';

export function deleteTagButtonClicked(
  payload: DeleteTagButtonClickedPayload
): DeleteTagButtonClicked {
  return { type: DELETE_TAG_BUTTON_CLICKED, payload };
}