import * as particularActions from '~/types/actions/particular-actions';
import { PlayerActions } from './player';

export type SimpleAction =
  | particularActions.SetPlayback
  | particularActions.SetPlaceNewTagMode
  | particularActions.SetCurrentStage
  | particularActions.SetDuration
  | particularActions.SetUserSeek
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
  | particularActions.SetStageSeekTo
  | particularActions.SetTimeTagAppearsAt
  | particularActions.SetTimeTagDisappearsAt
  | particularActions.SetVideoStatus
  | particularActions.VideoStartSeekingToStage
  | PlayerActions;

export * from './player';
