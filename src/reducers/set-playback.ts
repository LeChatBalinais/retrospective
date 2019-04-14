const setPlayback = (state, action) => {
  const { payload: on } = action;
  return {
    ...state,
    superVideoState: {
      ...state.superVideoState,
      playback: on
    }
  };
};

export default setPlayback;
