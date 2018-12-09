// @flow
import type { TagInteractivityProps } from './tag-interactivity-type';

export const DEFAULT_TAG_INTERACTIVITY_PROPS = {
  target: undefined,
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
