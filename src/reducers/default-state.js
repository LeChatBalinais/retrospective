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
    +[tag_id: number]: Marker
  },
  +allIDs: number[]
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

const DEFAULT_STATE: State = {
  superVideoState: {
    duration: 10,
    playback: false,
    currentTime: 0,
    url: 'http://localhost:3000/video',
    userSeek: false
  },
  editorState: {
    placeNewTagMode: false
  },
  tags: {
    byID: {},
    allIDs: []
  }
};

export default DEFAULT_STATE;
