import { ActionTemplate } from '~/types/action-template';

export type ActiveTagLabelClickedType = 'ACTIVE_TAG_LABEL_CLICKED';

export interface ActiveTagLabelClickedPayload {
  tagID: string;
}

export type ActiveTagLabelClicked = ActionTemplate<
  ActiveTagLabelClickedType,
  ActiveTagLabelClickedPayload
>;

export const ACTIVE_TAG_LABEL_CLICKED = 'ACTIVE_TAG_LABEL_CLICKED';

export function activeTagLabelClicked(
  payload: ActiveTagLabelClickedPayload
): ActiveTagLabelClicked {
  return { type: ACTIVE_TAG_LABEL_CLICKED, payload };
}
