import {
  State,
  PlaybackStatus,
  VideoStatus,
  SeekingStatus,
  SeekbarStatus
} from '~/state';
import { HOME_PAGE } from './routing/pages';
import { FormalReferenceKind } from './state/formal-compositions';

const DEFAULT_STATE: State = {
  page: HOME_PAGE,
  entities: {
    tags: {
      byID: {},
      allIDs: [],
      localOnly: []
    },
    videos: {
      byID: {},
      allIDs: []
    },
    players: {
      byID: {},
      allIDs: []
    },
    formalCompositions: {
      byID: {
        'b12c49bf-af6d-49ce-82fc-f82b811c750e': {
          globalID: 'e91342d8-7d4a-4c66-a724-e63a874c53cd',
          firstFormalReferenceID: 'e91342d8-7d4a-4c66-a724-e63a874c53cd',
          firstFormalReferenceKind: FormalReferenceKind.Anchor,
          secondFormalReferenceID: '3de2ce05-7faf-4190-bfda-27649d2c1008',
          secondFormalReferenceKind: FormalReferenceKind.Anchor
        }
      },
      allIDs: ['b12c49bf-af6d-49ce-82fc-f82b811c750e']
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
