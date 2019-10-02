import {
  State,
  PlaybackStatus,
  VideoStatus,
  SeekingStatus,
  SeekbarStatus
} from './types';

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
    playbackStatus: PlaybackStatus.Paused,
    seekingStatus: SeekingStatus.NoSeeking,
    lastRequestedStage: 0,
    video: {
      status: VideoStatus.Paused
    },
    seekbar: {
      status: SeekbarStatus.Idle
    }
  }
};

export default DEFAULT_STATE;
