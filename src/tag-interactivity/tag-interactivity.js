// @flow
import Draggable from 'gsap/Draggable';
import TweenMax from 'gsap';
import type {
  TagInteractivity,
  TagInteractivityProps
} from './tag-interactivity-type';

const updatedDraggable = (
  draggable: ?any,
  prevState: TagInteractivityProps,
  newState: TagInteractivityProps
) => {
  let newDraggable = draggable;

  if (prevState === newState) return newDraggable;

  const { draggable: prevExistance, target: prevTarget } = prevState;
  const { draggable: newExistance, target: newTarget } = newState;

  if (prevExistance !== newExistance) {
    const { exist: newIsDraggable, callbacks: newCallbacks } = newExistance;

    if (newDraggable) {
      newDraggable.kill();

      newDraggable = undefined;
    }

    if (newIsDraggable) {
      const {
        onDragBegin: onPress,
        onDragEnd: onRelease,
        onDrag
      } = newCallbacks;

      [newDraggable] = Draggable.create(newTarget, {
        dragClickables: true,
        bounds: '#bounds',
        onPress: (pointerEvent: PointerEvent) => {
          if (onPress) onPress(pointerEvent.clientX, pointerEvent.clientY);
        },
        onRelease: (pointerEvent: PointerEvent) => {
          if (onRelease) onRelease(pointerEvent.clientX, pointerEvent.clientY);
        },
        onDrag: (pointerEvent: PointerEvent) => {
          if (onDrag) onDrag(pointerEvent.clientX, pointerEvent.clientY);
        },
        onClick: e => {
          e.stopPropagation();
        }
      });
    }
    return newDraggable;
  }

  if (newDraggable && prevTarget !== newTarget) newDraggable.target = newTarget;

  return newDraggable;
};

const updateAnimation = (
  animation: ?any,
  prevState: TagInteractivityProps,
  newState: TagInteractivityProps
) => {
  let newAnimation = animation;

  if (prevState === newState) return newAnimation;

  const {
    animation: prevExistance,
    target: prevTarget,
    currentTime: prevCurrentTime
  } = prevState;
  const {
    animation: newExistance,
    target: newTarget,
    currentTime: newCurrentTime
  } = newState;

  if (prevExistance !== newExistance) {
    const {
      exist: newIsAnimated,
      duration: newDuration,
      path: newPath
    } = newExistance;

    if (newAnimation) {
      newAnimation.kill();
      newAnimation = undefined;
    }

    if (newIsAnimated) {
      newAnimation = TweenMax.to(newTarget, newDuration, {
        startAt: { x: 0, y: 0 },
        bezier: {
          values: newPath,
          timeResolution: 0
        },
        paused: true
      });
    }
    return newAnimation;
  }

  if (newAnimation && prevTarget !== newTarget) newAnimation.target = newTarget;

  if (
    newAnimation &&
    prevCurrentTime !== newCurrentTime &&
    Math.abs(newCurrentTime - newAnimation.time()) > 0.01
  ) {
    newAnimation.resume(newCurrentTime);
  }
  return newAnimation;
};

const updateInteractivity = (
  prevState: TagInteractivityProps,
  newState: TagInteractivityProps
) => (prevInteractivity: TagInteractivity) => {
  const { draggable, animation } = prevInteractivity;

  let newInteractivity = prevInteractivity;

  const newDraggable = updatedDraggable(draggable, prevState, newState);

  if (newDraggable !== draggable)
    newInteractivity = { ...newInteractivity, draggable: newDraggable };

  const newAnimation = updateAnimation(animation, prevState, newState);

  if (newAnimation !== animation)
    newInteractivity = { ...newInteractivity, animation: newAnimation };

  return newInteractivity;
};

export default updateInteractivity;
