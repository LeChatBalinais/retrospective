import { SimpleActionTemplate } from '~/types/actions/simple-action-template';

export type TagSavingConfirmedType = 'TAG_SAVING_CONFIRMED';

export interface TagSavingConfirmedPayload {
  tagID: string;
  tagGlobalID: string;
}

export type TagSavingConfirmed = SimpleActionTemplate<
  TagSavingConfirmedType,
  TagSavingConfirmedPayload
>;

export const TAG_SAVING_CONFIRMED = 'TAG_SAVING_CONFIRMED';

export default function tagSavingConfirmed(
  payload: TagSavingConfirmedPayload
): TagSavingConfirmed {
  return { type: TAG_SAVING_CONFIRMED, payload };
}
