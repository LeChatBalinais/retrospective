const addNewTag = (state, action) => {
  const {
    payload: { x, y }
  } = action;

  const newID = state.tags.allIDs.length;

  return {
    ...state,
    tags: {
      byID: { ...state.tags.byID, [newID]: { x, y, dragged: false, path: [] } },
      allIDs: [...state.tags.allIDs, newID]
    }
  };
};

export default addNewTag;
