// @flow

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
  +tags: {
    +byID: {
      +[tag_id: number]: {
        +x: number,
        +y: number,
        +dragged: boolean,
        +startTime: number,
        +path: { +time: number, +x: number, +y: number }[]
      }
    },
    +allIDs: number[]
  }
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
