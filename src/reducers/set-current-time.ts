const setCurrentTime = (state, action) => {
  const { payload: currentTime } = action;
  return {
    ...state,
    superVideoState: {
      ...state.superVideoState,
      currentTime
    }
  };
};

export default setCurrentTime;
