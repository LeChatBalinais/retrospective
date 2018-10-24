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
    byID: {
      0: { x: 0, y: 0 },
      1: { x: 100, y: 100 },
      2: { x: 200, y: 200 },
      3: { x: 300, y: 300 }
    },
    allIDs: [0, 1, 2, 3]
  }
};

export default DEFAULT_STATE;
