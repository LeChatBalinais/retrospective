import { PlayerActions } from './ui/player';
import { TagListActions } from './ui/tag-list';
import { SagasActions } from './sagas';
import { NewTagButtonClicked } from './ui/new-tag-button-clicked';

export type SimpleAction =
  | PlayerActions
  | TagListActions
  | SagasActions
  | NewTagButtonClicked;

export * from './ui/player';
export * from './ui/tag-list';
export * from './sagas';
export * from './ui/new-tag-button-clicked';
