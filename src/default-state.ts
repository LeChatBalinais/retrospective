import {
  State,
  PlaybackStatus,
  VideoStatus,
  SeekingStatus,
  SeekbarStatus
} from '~/state';

const DEFAULT_STATE: State = {
  page: 'Home',
  entities: {
    tags: {
      byID: {},
      allIDs: []
    },
    videos: {
      byID: {},
      allIDs: []
    },
    players: {
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
  player: {
    videoID: '',
    duration: 0,
    delayOn: false,
    seekVideo: false,
    playbackStatus: PlaybackStatus.Paused,
    seekingStatus: SeekingStatus.NoSeeking,
    lastRequestedStage: undefined,
    video: {
      status: VideoStatus.Paused
    },
    seekPreview: {
      status: VideoStatus.Paused
    },
    seekbar: {
      status: SeekbarStatus.Idle
    }
  }
};

export default DEFAULT_STATE;
