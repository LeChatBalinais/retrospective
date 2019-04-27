import { State } from '../types/state';

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
  },
  draggedTags: [],
  localTags: []
};

export default DEFAULT_STATE;
