const setUserSeek = (state, action) => {
  const {
    payload: { markers }
  } = action;

  return {
    ...state,
    tags: markers
  };
};

export default setUserSeek;
