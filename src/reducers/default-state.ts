import { State, PlayerStatus, VideoStatus } from '../types';

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
    duration: 0,
    url: 'http://localhost:9000/video'
  },
  player: {
    status: PlayerStatus.Paused,
    video: {
      status: VideoStatus.Playing,
      atStage: undefined,
      stageSeekTo: undefined
    }
  }
};

export default DEFAULT_STATE;
