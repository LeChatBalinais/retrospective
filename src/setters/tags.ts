import {
  addElementToTable,
  removeElementFromTable,
  updateElementInTable,
  makeElementGlobal
} from './global-entity-table';
import { Tag, State, TagsByID, PlaneTimePoint } from '~/state';

export const addNewTag = (
  state: State,
  {
    videoID,
    time,
    x,
    y
  }: { videoID: string; time: number; x: number; y: number }
): State => ({
  ...state,
  entities: {
    ...state.entities,
    tags: addElementToTable<Tag>(state.entities.tags, {
      videoID,
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

export const updateTag = (
  state: State,
  tagID: string,
  videoID: string,
  path: PlaneTimePoint[]
): State => ({
  ...state,
  entities: {
    ...state.entities,
    tags: updateElementInTable<Tag>(state.entities.tags, tagID, {
      videoID,
      path
    })
  }
});

export const setTagGlobalID = (
  state: State,
  tagID: string,
  globalID: string
): State => {
  return {
    ...state,
    entities: {
      ...state.entities,
      tags: makeElementGlobal<Tag>(state.entities.tags, tagID, globalID)
    }
  };
};

export const setTagsByID = (state: State, byID: TagsByID): State => ({
  ...state,
  entities: {
    ...state.entities,
    tags: {
      ...state.entities.tags,
      byID
    }
  }
});
