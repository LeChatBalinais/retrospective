import * as particularActions from '~/types/actions/particular-actions';
import { PlayerActions } from './ui/player';
import { TagListActions } from './ui/tag-list';
import { SagasActions } from './sagas';

export type SimpleAction =
  | particularActions.SetPlayback
  | particularActions.SetPlaceNewTagMode
  | particularActions.SetDraggedTag
  | particularActions.UpdateTagPath
  | particularActions.SetCurrentTag
  | particularActions.SetTagTraceVisible
  | particularActions.SetTimeTagAppearsAt
  | particularActions.SetTimeTagDisappearsAt
  | PlayerActions
  | TagListActions
  | SagasActions;

export * from './ui/player';
export * from './ui/tag-list';
export * from './sagas';
