import * as particularActions from '~/types/actions/particular-actions';
import { PlayerActions } from './player';
import { TagListActions } from './tag-list';

export type SimpleAction =
  | particularActions.SetPlayback
  | particularActions.SetPlaceNewTagMode
  | particularActions.AddNewTag
  | particularActions.SetDraggedTag
  | particularActions.UpdateTagPath
  | particularActions.SetTags
  | particularActions.SetCurrentTag
  | particularActions.SetTagTraceVisible
  | particularActions.RemoveTag
  | particularActions.SetTagGlobalID
  | particularActions.DeleteTag
  | particularActions.SaveTag
  | particularActions.FetchTags
  | particularActions.SetTimeTagAppearsAt
  | particularActions.SetTimeTagDisappearsAt
  | PlayerActions
  | TagListActions;

export * from './player';
