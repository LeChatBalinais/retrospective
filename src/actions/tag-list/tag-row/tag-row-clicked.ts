import { SimpleActionTemplate } from '~/types/actions/simple-action-template';

export interface TagRowClickedPayload {
  tagID: string;
}

export type TagRowClicked = SimpleActionTemplate<
  'TAG_ROW_CLICKED',
  TagRowClickedPayload
>;

export const TAG_ROW_CLICKED = 'TAG_ROW_CLICKED';

export function tagRowClicked(payload: TagRowClickedPayload): TagRowClicked {
  return { type: TAG_ROW_CLICKED, payload };
}

export const TagRowClicked = undefined;
