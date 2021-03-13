import { State } from '~/state';

export const setCurrentTagID = (state: State, currentTag: string): State => ({
  ...state,
  tagEditor: { ...state.tagEditor, currentTag }
});

export const setTagBeingEditedID = (
  state: State,
  tagBeingEditedID: string
): State => {
  return {
    ...state,
    tagEditor: { ...state.tagEditor, tagsBeingEdited: [tagBeingEditedID] }
  };
};

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

export const setVisibleTraceTagIDs = (
  state: State,
  tagsWithVisibleTrace: string[]
): State => ({
  ...state,
  tagEditor: {
    ...state.tagEditor,
    tagsWithVisibleTrace
  }
});

export const setTagTraceVisible = (
  tagsWithVisibleTrace: string[],
  tagID: string,
  visible: boolean
): string[] => {
  if (visible) {
    if (!tagsWithVisibleTrace.includes(tagID)) {
      return [...tagsWithVisibleTrace, tagID];
    }
  } else if (tagsWithVisibleTrace.includes(tagID)) {
    return tagsWithVisibleTrace.filter(
      (value: string): boolean => value !== tagID
    );
  }

  return tagsWithVisibleTrace;
};
