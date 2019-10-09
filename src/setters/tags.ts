import {
  addElementToTable,
  removeElementFromTable,
  updateElementInTable
} from './table';
import { Tag, State, TagsByID, PlaneTimePoint } from '~/state';
import { getTag } from '~/getters/tags';

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

export const updateTag = (
  state: State,
  tagID: string,
  globalID: string,
  path: PlaneTimePoint[]
): State => ({
  ...state,
  entities: {
    ...state.entities,
    tags: updateElementInTable<Tag>(state.entities.tags, tagID, {
      globalID,
      path
    })
  }
});

export const setTagGlobalID = (
  state: State,
  tagID: string,
  globalID: string
): State => {
  const tag = getTag(state, tagID);
  return updateTag(state, tagID, globalID, tag.path);
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
