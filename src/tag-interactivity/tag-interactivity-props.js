// @flow

export type TagDragCallbacks = {
  onDragBegin: ?(number, number) => void,
  onDrag: ?(number, number) => void,
  onDragEnd: ?(number, number) => void
};

export type TagInteractivityProps = {
  target: ?any,
  currentTime: number,
  draggable: {
    exist: boolean,
    callbacks: TagDragCallbacks
  },
  animation: {
    exist: boolean,
    duration: number,
    path: Array<{ time: number, x: number, y: number }>
  }
};

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

export const updateCurrentTime = (
  prevState: TagInteractivityProps,
  currentTime: number
) => {
  if (prevState.currentTime === currentTime) return prevState;
  return {
    ...prevState,
    currentTime
  };
};

export const updateDraggable = (
  prevState: TagInteractivityProps,
  draggable: boolean
) => {
  if (prevState.draggable.exist === draggable) return prevState;
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

export const updateOnDragBegin = (
  prevState: TagInteractivityProps,
  onDragBegin: (number, number) => void
) => {
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

export const updateOnDrag = (
  prevState: TagInteractivityProps,
  onDrag: (number, number) => void
) => {
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

export const updateOnDragEnd = (
  prevState: TagInteractivityProps,
  onDragEnd: (number, number) => void
) => {
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

export const updateDuration = (
  prevState: TagInteractivityProps,
  duration: number
) => {
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

export const updatePath = (
  prevState: TagInteractivityProps,
  path: Array<{ time: number, x: number, y: number }>
) => {
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
