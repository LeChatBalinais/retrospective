import * as particularActions from './particular-actions';

export type SimpleAction =
  | particularActions.SetPlayback
  | particularActions.SetPlaceNewTagMode
  | particularActions.SetCurrentNormalizedTime
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
  | particularActions.SetRequestedNormalizedTime
  | particularActions.SetTimeTagAppearsAt
  | particularActions.SetTimeTagDisappearsAt;
