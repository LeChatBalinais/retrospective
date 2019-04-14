const setPlaceNewTagMode = (state, action) => {
  const { payload: on } = action;
  return {
    ...state,
    editorState: {
      ...state.editorState,
      placeNewTagMode: on
    }
  };
};

export default setPlaceNewTagMode;
