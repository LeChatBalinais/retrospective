import { State } from '../types/state';

const DEFAULT_STATE: State = {
  superVideoState: {
    duration: 29,
    playback: false,
    currentTime: 0,
    url: 'http://localhost:9000/video',
    userSeek: false,
    seekToRequestedTime: false,
    requestedTime: 0
  },
  editorState: {
    placeNewTagMode: false
  },
  tags: {
    byID: {},
    allIDs: []
  },
  draggedTag: undefined,
  localTags: [],
  currentTag: undefined
};

export default DEFAULT_STATE;
