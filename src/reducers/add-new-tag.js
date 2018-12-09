const addNewTag = (state, action) => {
  const {
    payload: { x, y }
  } = action;

  const newID = state.tags.allIDs.length;

  return {
    ...state,
    tags: {
      byID: {
        ...state.tags.byID,
        [newID]: {
          x,
          y,
          dragged: false,
          startTime: state.superVideoState.currentTime,
          path: [{ time: state.superVideoState.currentTime, x: 0, y: 0 }]
        }
      },
      allIDs: [...state.tags.allIDs, newID]
    }
  };
};

export default addNewTag;
