export interface State {
  readonly entities: Entities;
  readonly footage: Footage;
  readonly player: Player;
  readonly tagEditor: TagEditor;
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
  readonly playback: boolean;
  readonly currentTime: number;
  readonly url: string;
}

export interface Player {
  readonly seekToRequestedTime: boolean;
  readonly requestedTime: number;
  readonly playback: boolean;
  readonly userSeek: boolean;
  readonly currentTimeNormalized: number;
}
