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

const getNormalizedLeftTopPos = (
  pointerEvent: HTMLDivElement
): { x: number; y: number } => {
  const dragOnRect = pointerEvent.parentElement.getBoundingClientRect();
  const draggedRect = pointerEvent.getBoundingClientRect();
  const relativeX = draggedRect.left - dragOnRect.left;
  const relativeY = draggedRect.top - dragOnRect.top;
  const relativeNormalizedX = (relativeX / dragOnRect.width) * 100;
  const relativeNormalizedY = (relativeY / dragOnRect.height) * 100;
  return { x: relativeNormalizedX, y: relativeNormalizedY };
};

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
        onPress: (pointerEvent: React.MouseEvent<HTMLDivElement>): void => {
          const pos = getNormalizedLeftTopPos(newTarget);
          if (onPress) onPress(pos.x, pos.y);
        },
        onRelease: (pointerEvent: React.MouseEvent<HTMLDivElement>): void => {
          const pos = getNormalizedLeftTopPos(newTarget);
          if (onRelease) onRelease(pos.x, pos.y);
        },
        onDrag: (pointerEvent: React.MouseEvent<HTMLDivElement>): void => {
          const pos = getNormalizedLeftTopPos(newTarget);
          if (onDrag) onDrag(pos.x, pos.y);
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
          left: `${newPath[i + 1].x}%`,
          top: `${newPath[i + 1].y}%`
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
