import { v4 as uuid } from 'uuid';
import {
  VideoStatus,
  State,
  SeekingStatus,
  PlaybackStatus,
  SeekbarStatus,
  Table,
  Tag
} from '~/types';

export const setVideoStatus = (state: State, status: VideoStatus): State => ({
  ...state,
  player: {
    ...state.player,
    video: {
      ...state.player.video,
      status
    }
  }
});

export const setStageVideoSeekingTo = (
  state: State,
  stageSeekingTo: number
): State => ({
  ...state,
  player: {
    ...state.player,
    video: {
      ...state.player.video,
      stageSeekingTo
    }
  }
});

export const setStageVideoAt = (state: State, stageAt: number): State => ({
  ...state,
  player: {
    ...state.player,
    video: {
      ...state.player.video,
      stageAt
    }
  }
});

export const setSeekingStatus = (
  state: State,
  seekingStatus: SeekingStatus
): State => ({
  ...state,
  player: {
    ...state.player,
    seekingStatus
  }
});

export const setSeekbarStatus = (
  state: State,
  status: SeekbarStatus
): State => ({
  ...state,
  player: {
    ...state.player,
    seekbar: {
      ...state.player.seekbar,
      status
    }
  }
});

export const setPlaybackStatus = (
  state: State,
  playbackStatus: PlaybackStatus
): State => ({
  ...state,
  player: {
    ...state.player,
    playbackStatus
  }
});

export const setLastRequestedStage = (
  state: State,
  lastRequestedStage: number
): State => ({
  ...state,
  player: {
    ...state.player,
    lastRequestedStage
  }
});

export const setVideoDuration = (state: State, duration: number): State => ({
  ...state,
  footage: { ...state.footage, duration }
});

export const setCurrentTagID = (state: State, currentTag: string): State => ({
  ...state,
  tagEditor: { ...state.tagEditor, currentTag }
});

export const setPlacingNewTagMode = (
  state: State,
  userIsPlacingNewTag: boolean
): State => ({
  ...state,
  tagEditor: {
    ...state.tagEditor,
    userIsPlacingNewTag
  }
});

function addElementToTable<T>(table: Table<T>, instance: T): Table<T> {
  const ID = uuid();

  return {
    byID: {
      ...table.byID,
      [ID]: instance
    },
    allIDs: [...table.allIDs, ID]
  };
}

function removeElementFromTable<T>(
  { byID: prevByID, allIDs }: Table<T>,
  ID: string
): Table<T> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { [ID]: removedTag, ...byID } = prevByID;

  const index = allIDs.findIndex((element: string): boolean => element === ID);

  return {
    byID,
    allIDs: [...allIDs.slice(0, index), ...allIDs.slice(index + 1)]
  };
}

export const addNewTag = (
  state: State,
  { time, x, y }: { time: number; x: number; y: number }
): State => ({
  ...state,
  entities: {
    ...state.entities,
    tags: addElementToTable<Tag>(state.entities.tags, {
      globalID: undefined,
      path: [{ time, x, y }]
    })
  }
});

export const deleteTag = (state: State, tagID: string): State => ({
  ...state,
  entities: {
    ...state.entities,
    tags: removeElementFromTable<Tag>(state.entities.tags, tagID)
  }
});
