export const DEFAULT_TAG_INTERACTIVITY_PROPS = {
  target: undefined,
  currentTime: 0,
  draggable: {
    exist: false,
    callbacks: {
      onDragBegin: undefined,
      onDrag: undefined,
      onDragEnd: undefined
    }
  },
  animation: {
    exist: false,
    duration: 0,
    path: []
  }
};

export const updateCurrentTime = (prevState, currentTime) => {
  if (prevState.currentTime === currentTime) return prevState;
  return {
    ...prevState,
    currentTime
  };
};

export const updateDraggable = (prevState, draggable) => {
  if (
    prevState.draggable.exist === draggable &&
    prevState.animation.exist === !draggable
  )
    return prevState;
  return {
    ...prevState,
    draggable: {
      ...prevState.draggable,
      exist: draggable
    },
    animation: {
      ...prevState.animation,
      exist: !draggable
    }
  };
};

export const updateOnDragBegin = (prevState, onDragBegin) => {
  if (prevState.draggable.callbacks.onDragBegin) return prevState;
  return {
    ...prevState,
    draggable: {
      ...prevState.draggable,
      callbacks: {
        ...prevState.draggable.callbacks,
        onDragBegin
      }
    }
  };
};

export const updateOnDrag = (prevState, onDrag) => {
  if (prevState.draggable.callbacks.onDrag) return prevState;
  return {
    ...prevState,
    draggable: {
      ...prevState.draggable,
      callbacks: {
        ...prevState.draggable.callbacks,
        onDrag
      }
    }
  };
};

export const updateOnDragEnd = (prevState, onDragEnd) => {
  if (prevState.draggable.callbacks.onDragEnd) return prevState;
  return {
    ...prevState,
    draggable: {
      ...prevState.draggable,
      callbacks: {
        ...prevState.draggable.callbacks,
        onDragEnd
      }
    }
  };
};

export const updateDuration = (prevState, duration) => {
  if (!prevState.animation.exist || prevState.animation.duration === duration)
    return prevState;
  return {
    ...prevState,
    animation: {
      ...prevState.animation,
      duration
    }
  };
};

export const updatePath = (prevState, path) => {
  if (!prevState.animation.exist || prevState.animation.path === path)
    return prevState;
  return {
    ...prevState,
    animation: {
      ...prevState.animation,
      path
    }
  };
};
