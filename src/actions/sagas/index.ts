import { TagDeletionConfirmed } from './tag-deletion-confirmed';
import { TagSavingConfirmed } from './tag-saving-confirmed';

export type SagasActions = TagDeletionConfirmed | TagSavingConfirmed;

export * from './tag-deletion-confirmed';
export * from './tag-saving-confirmed';
