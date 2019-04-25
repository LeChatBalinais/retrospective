import { Draggable } from 'gsap/Draggable';
import { TimelineLite } from 'gsap';
import { InteractivityProps } from './tag-interactivity-props';

export interface Interactivity {
  draggable: Draggable;
  animation: TimelineLite;
}

type UpdateInteractivityFunc = (
  prevInteractivity: Interactivity
) => Interactivity;

const updatedDraggable = (
  draggable: Draggable,
  prevState: InteractivityProps,
  newState: InteractivityProps
): Draggable => {
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
        onPress: (pointerEvent: PointerEvent): void => {
          if (onPress) onPress(pointerEvent.clientX, pointerEvent.clientY);
        },
        onRelease: (pointerEvent: PointerEvent): void => {
          if (onRelease) onRelease(pointerEvent.clientX, pointerEvent.clientY);
        },
        onDrag: (pointerEvent: PointerEvent): void => {
          if (onDrag) onDrag(pointerEvent.clientX, pointerEvent.clientY);
        },
        onClick: (e: PointerEvent): void => {
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
  animation: TimelineLite,
  prevState: InteractivityProps,
  newState: InteractivityProps
): TimelineLite => {
  let newAnimation = animation;

  if (prevState === newState) return newAnimation;

  const { animation: prevExistance, currentTime: prevCurrentTime } = prevState;
  const {
    animation: newExistance,
    target: newTarget,
    currentTime: newCurrentTime
  } = newState;

  if (prevExistance !== newExistance) {
    const { exist: newIsAnimated, path: newPath } = newExistance;

    if (newAnimation) {
      newAnimation.kill();
      newAnimation = undefined;
    }

    if (newIsAnimated) {
      newAnimation = new TimelineLite({ paused: true, tweens: [] });

      for (let i = 0; i < newPath.length - 1; i += 1)
        newAnimation.to(newTarget, newPath[i + 1].time - newPath[i].time, {
          // startAt: { x: 0 + newPath[i].x, y: 0 + newPath[i].y },
          x: newPath[i + 1].x,
          y: newPath[i + 1].y
        });
    }
  }

  if (
    newAnimation &&
    prevCurrentTime !== newCurrentTime &&
    Math.abs(newCurrentTime - newAnimation.time()) > 0.01
  ) {
    newAnimation.resume(newCurrentTime);
  }
  return newAnimation;
};

export const updateInteractivity = (
  prevState: InteractivityProps,
  newState: InteractivityProps
): UpdateInteractivityFunc => (
  prevInteractivity: Interactivity
): Interactivity => {
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
