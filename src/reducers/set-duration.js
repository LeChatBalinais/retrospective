const setDuration = (state, action) => {
  const { payload: duration } = action;
  return {
    ...state,
    superVideoState: {
      ...state.superVideoState,
      duration
    }
  };
};

export default setDuration;
