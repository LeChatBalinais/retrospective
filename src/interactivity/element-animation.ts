import { TimelineLite } from 'gsap';

interface SpaceTimePoint {
  time: number;
  x: number;
  y: number;
}

export interface AnimationProps {
  width: number;
  height: number;
  path: SpaceTimePoint[];
  currentTime: number;
}

export function getUpdatedAnimationProps(
  path: SpaceTimePoint[],
  currentTime: number,
  width: number,
  height: number,
  existance: boolean
): AnimationProps {
  if (!existance) return undefined;
  return { path, currentTime, width, height };
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
  width: number,
  height: number
): TimelineLite {
  const animation = new TimelineLite({ paused: true, tweens: [] });
  for (let i = 0; i < path.length - 1; i += 1) {
    animation.to(target, path[i + 1].time - path[i].time, {
      left: `calc(${path[i + 1].x}% - ${width}px`,
      top: `calc(${path[i + 1].y}% - ${height}px`
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
  newState: AnimationProps,
  getTarget: () => HTMLDivElement
): TimelineLite => {
  let updatedAnimation = animation;

  if (prevState === newState) return updatedAnimation;

  if (prevState && !newState)
    updatedAnimation = shutedDownAnimation(updatedAnimation);

  if (!newState) return updatedAnimation;

  const { width, height, path, currentTime } = newState;
  const target = getTarget();

  if (!target || !width || !height || !path) return updatedAnimation;

  if (!prevState) {
    updatedAnimation = createNewAnimation(target, path, width, height);
    updatedAnimation = updatedAnimationToCurrentTime(
      updatedAnimation,
      currentTime
    );
  } else {
    const {
      width: prevWidth,
      height: prevHeight,
      path: prevPath,
      currentTime: prevCurrentTime
    } = prevState;

    if (prevPath !== path || prevWidth !== width || prevHeight !== height) {
      updatedAnimation = createNewAnimation(target, path, width, height);
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
