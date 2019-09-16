import { SimpleActionTemplate } from '~/types/actions/simple-action-template';

export type TagDeletionConfirmedType = 'TAG_DELETION_CONFIRMED';

export interface TagDeletionConfirmedPayload {
  tagID: string;
}

export type TagDeletionConfirmed = SimpleActionTemplate<
  TagDeletionConfirmedType,
  TagDeletionConfirmedPayload
>;

export const TAG_DELETION_CONFIRMED = 'TAG_DELETION_CONFIRMED';

export default function tagDeletionConfirmed(
  payload: TagDeletionConfirmedPayload
): TagDeletionConfirmed {
  return { type: TAG_DELETION_CONFIRMED, payload };
}
