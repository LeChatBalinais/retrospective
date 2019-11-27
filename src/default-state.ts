import {
  State,
  PlaybackStatus,
  VideoStatus,
  SeekingStatus,
  SeekbarStatus
} from '~/state';

const DEFAULT_STATE: State = {
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
  footage: {
    videoURL: 'http://localhost:9000/video/08b1ab98-ef70-415c-b533-5b07f34c4f18',
    seekPreviewURL: 'http://localhost:9000/seekpreview/08b1ab98-ef70-415c-b533-5b07f34c4f18'
  },
  player: {
    videoID: "",
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
