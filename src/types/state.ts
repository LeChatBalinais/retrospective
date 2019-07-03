import Tag from './tag';

export interface State {
  readonly superVideoState: {
    readonly duration: number;
    readonly playback: boolean;
    readonly currentTime: number;
    readonly url: string;
    readonly userSeek: boolean;
  };
  readonly editorState: {
    readonly placeNewTagMode: boolean;
  };

  readonly tags: Tags;
  readonly draggedTags: string[];
  readonly localTags: string[];
  readonly currentTag: string;
}

export interface Tags {
  readonly byID: { [ID: string]: Tag };
  readonly allIDs: string[];
}
