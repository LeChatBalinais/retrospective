import { TimelineLite } from 'gsap';

interface SpaceTimePoint {
  time: number;
  x: number;
  y: number;
}
interface Size {
  width: number;
  height: number;
}

export interface AnimationProps {
  target: HTMLDivElement;
  targetSize: Size;
  path: SpaceTimePoint[];
  currentTime: number;
}

export function getAnimationPropsWithUpdatedTarget(
  animationProps: AnimationProps,
  target: HTMLDivElement,
  targetSize: Size
): AnimationProps {
  if (!animationProps || target !== animationProps.target) {
    return { ...animationProps, target, targetSize };
  }

  return animationProps;
}

export function getUpdatedAnimationProps(
  animationProps: AnimationProps,
  path: SpaceTimePoint[],
  currentTime: number
): AnimationProps {
  if (
    !animationProps ||
    path !== animationProps.path ||
    currentTime !== animationProps.currentTime
  )
    return { ...animationProps, path, currentTime };

  return animationProps;
}

function shutedDownAnimation(animation: TimelineLite): undefined {
  if (animation) {
    animation.kill();
  }
  return undefined;
}

function createNewAnimation(
  target: HTMLDivElement,
  path: SpaceTimePoint[],
  size: Size
): TimelineLite {
  const animation = new TimelineLite({ paused: true, tweens: [] });
  for (let i = 0; i < path.length - 1; i += 1) {
    animation.to(target, path[i + 1].time - path[i].time, {
      left: `calc(${path[i + 1].x}% - ${size.width}px`,
      top: `calc(${path[i + 1].y}% - ${size.height}px`
    });
  }
  return animation;
}

function updatedAnimationToCurrentTime(
  animation: TimelineLite,
  time: number
): TimelineLite {
  if (Math.abs(time - animation.time()) > 0.01) {
    animation.resume(time);
  }
  return animation;
}

export const getUpdatedAnimation = (
  animation: TimelineLite,
  prevState: AnimationProps,
  newState: AnimationProps
): TimelineLite => {
  let updatedAnimation = animation;

  if (prevState === newState) return updatedAnimation;

  if (prevState && !newState)
    updatedAnimation = shutedDownAnimation(updatedAnimation);

  if (!newState) return updatedAnimation;

  const { target, targetSize, path, currentTime } = newState;

  if (!target || !targetSize || !path) return updatedAnimation;

  if (!prevState) {
    updatedAnimation = createNewAnimation(target, path, targetSize);
    updatedAnimation = updatedAnimationToCurrentTime(
      updatedAnimation,
      currentTime
    );
  } else {
    const {
      target: prevTarget,
      targetSize: prevTargetSize,
      path: prevPath,
      currentTime: prevCurrentTime
    } = prevState;

    if (
      prevTarget !== target ||
      prevPath !== path ||
      prevTargetSize !== targetSize
    ) {
      updatedAnimation = createNewAnimation(target, path, targetSize);
    }

    if (prevCurrentTime !== currentTime) {
      updatedAnimation = updatedAnimationToCurrentTime(
        updatedAnimation,
        currentTime
      );
    }
  }

  return updatedAnimation;
};
