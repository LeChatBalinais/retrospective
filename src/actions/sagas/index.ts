import { TagDeletionConfirmed } from './tag-deletion-confirmed';
import { TagSavingConfirmed } from './tag-saving-confirmed';
import { TagsFetched } from './tags-fetched';

export type SagasActions =
  | TagDeletionConfirmed
  | TagSavingConfirmed
  | TagsFetched;

export * from './tag-deletion-confirmed';
export * from './tag-saving-confirmed';
export * from './tags-fetched';
