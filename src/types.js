// @flow

export type Marker = {
  +x: number,
  +y: number,
  +dragged: boolean,
  +startTime: number,
  +path: { +time: number, +x: number, +y: number }[]
};

export type Tags = {
  +byID: {
    +[tag_id: string]: Marker
  },
  +allIDs: string[]
};

export type State = {
  +superVideoState: {
    +duration: number,
    +playback: boolean,
    +currentTime: number,
    +url: string,
    +userSeek: boolean
  },
  +editorState: {
    +placeNewTagMode: boolean
  },
  +tags: Tags
};
