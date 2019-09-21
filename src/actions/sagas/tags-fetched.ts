import { ActionTemplate } from '~/types/action-template';
import { Table, Tag } from '~/types/state';

export type TagsFetchedType = 'TAGS_FETCHED';

export interface TagsFetchedPayload {
  tags: Table<Tag>;
}

export type TagsFetched = ActionTemplate<
  TagsFetchedType,
  TagsFetchedPayload
>;

export const TAGS_FETCHED = 'TAGS_FETCHED';

export default function tagsFetched(payload: TagsFetchedPayload): TagsFetched {
  return { type: TAGS_FETCHED, payload };
}
