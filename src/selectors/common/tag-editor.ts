import { State } from '~/state';

export const getBeingEditedTagIDs = ({
  tagEditor: { tagsBeingEdited }
}: State): string[] => tagsBeingEdited;

export const getVisibleTraceTagIDs = ({
  tagEditor: { tagsWithVisibleTrace }
}: State): string[] => tagsWithVisibleTrace;

export const isPlaceNewTagModeOn = ({
  tagEditor: { userIsPlacingNewTag }
}: State): boolean => userIsPlacingNewTag;

export const getCurrentTagID = ({ tagEditor: { currentTag } }: State): string =>
  currentTag;

export const getTagBeingEditedIDs = ({
  tagEditor: { tagsBeingEdited }
}: State): string[] => tagsBeingEdited;
