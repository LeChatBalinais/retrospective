// @flow

export type TagInteractivity = {
  animation: ?any,
  draggable: ?any
};

export type TagDragCallbacks = {
  onDragBegin: ?(number, number) => void,
  onDrag: ?(number, number) => void,
  onDragEnd: ?(number, number) => void
};

export type TagInteractivityProps = {
  target: ?any,
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
