export interface State {
  readonly entities: Entities;

  readonly tagEditor: TagEditor;
  readonly footage: Footage;
  readonly player: Player;
}

export interface Entities {
  tags: Table<Tag>;
}

export interface Table<E> {
  readonly byID: { [ID: string]: E };
  readonly allIDs: string[];
}

export interface Tag {
  readonly globalID: string;
  readonly path: { time: number; x: number; y: number }[];
}

export interface TagEditor {
  readonly userIsPlacingNewTag: boolean;
  readonly tagsBeingEdited: string[];
  readonly currentTag: string;
  readonly selectedTags: string[];
  readonly tagsWithVisibleTrace: string[];
}

export interface Footage {
  readonly duration: number;
  readonly url: string;
}

export interface Player {
  readonly playback: boolean;
  readonly userSeek: boolean;
  readonly currentTimeNormalized: number;
}
