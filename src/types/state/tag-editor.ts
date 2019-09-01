export interface TagEditor {
  readonly userIsPlacingNewTag: boolean;
  readonly tagsBeingEdited: string[];
  readonly currentTag: string;
  readonly selectedTags: string[];
  readonly tagsWithVisibleTrace: string[];
}
