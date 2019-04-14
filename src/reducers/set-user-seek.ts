const setUserSeek = (state, action) => {
  const { payload: on } = action;
  return {
    ...state,
    superVideoState: {
      ...state.superVideoState,
      userSeek: on
    }
  };
};

export default setUserSeek;
