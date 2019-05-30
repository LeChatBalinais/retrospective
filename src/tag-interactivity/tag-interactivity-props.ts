export type OnDragFunc = (xCoor: number, yCoor: number) => void;

export interface DraggableProps {
  exist: boolean;
  callbacks: {
    onDragBegin: OnDragFunc;
    onDrag: OnDragFunc;
    onDragEnd: OnDragFunc;
  };
}

export interface AnimationProps {
  exist: boolean;
  duration: number;
  path: { time: number; x: number; y: number }[];
}

export interface InteractivityProps {
  target: HTMLDivElement;
  currentTime: number;
  draggable: DraggableProps;
  animation: AnimationProps;
}

export const DEFAULT_TAG_INTERACTIVITY_PROPS: InteractivityProps = {
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
  prevState: InteractivityProps,
  currentTime: number
): InteractivityProps => {
  if (prevState.currentTime === currentTime) return prevState;
  return {
    ...prevState,
    currentTime
  };
};

export const updateDraggable = (
  prevState: InteractivityProps,
  draggable: boolean
): InteractivityProps => {
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

export const updateOnDragBegin = (
  prevState: InteractivityProps,
  onDragBegin: OnDragFunc
): InteractivityProps => {
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
  prevState: InteractivityProps,
  onDrag: OnDragFunc
): InteractivityProps => {
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
  prevState: InteractivityProps,
  onDragEnd: OnDragFunc
): InteractivityProps => {
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
  prevState: InteractivityProps,
  duration: number
): InteractivityProps => {
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
  prevState: InteractivityProps,
  path: { time: number; x: number; y: number }[]
): InteractivityProps => {
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
