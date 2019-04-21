const DEFAULT_STATE = {
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