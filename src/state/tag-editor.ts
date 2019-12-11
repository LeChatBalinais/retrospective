export interface TagEditor {
  readonly highlightedTagID?: string;
  readonly userIsPlacingNewTag: boolean;
  readonly tagsBeingEdited: string[];
  readonly currentTag: string;
  readonly tagsWithVisibleTrace: string[];
}
