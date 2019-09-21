import { ActionTemplate } from '~/types/action-template';

export type TagRowClickedType = 'TAG_ROW_CLICKED';

export interface TagRowClickedPayload {
  tagID: string;
}

export type TagRowClicked = ActionTemplate<
  TagRowClickedType,
  TagRowClickedPayload
>;

export const TAG_ROW_CLICKED = 'TAG_ROW_CLICKED';

export function tagRowClicked(payload: TagRowClickedPayload): TagRowClicked {
  return { type: TAG_ROW_CLICKED, payload };
}
