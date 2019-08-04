import { State } from '../types/state';

const DEFAULT_STATE: State = {
  entities: {
    tags: {
      byID: {},
      allIDs: []
    }
  },
  tagEditor: {
    userIsPlacingNewTag: false,
    tagsBeingEdited: [],
    currentTag: undefined,
    selectedTags: [],
    tagsWithVisibleTrace: []
  },
  footage: {
    duration: 29,
    url: 'http://localhost:9000/video'
  },
  player: {
    playback: false,
    userSeek: false,
    currentTimeNormalized: 0
  }
};

export default DEFAULT_STATE;
