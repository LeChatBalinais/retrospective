import React, { useRef, useEffect, useMemo } from 'react';
import { TimelineLite } from 'gsap';
import {
  AnimationProps,
  getUpdatedAnimation,
  getUpdatedAnimationProps
} from '../interactivity/element-animation';

export interface ValueProps {
  x: number;
  y: number;
  offsetX: number;
  offsetY: number;
  path: { time: number; x: number; y: number }[];
  currentTime: number;
  className: string;
  dragged: boolean;
  playback: boolean;
  isCurrent: boolean;
}

export interface FuncProps {
  onMouseDown: () => void;
  onMouseUp: () => void;
}

export type Props = ValueProps & FuncProps;

const Tag = ({
  x,
  y,
  offsetX,
  offsetY,
  path,
  currentTime,
  className,
  dragged,
  playback,
  isCurrent,
  onMouseDown,
  onMouseUp
}: Props): JSX.Element => {
  const divEl = useRef(null);

  const width = 5;
  const height = 5;
  const existance = playback && !dragged;

  const animationProps = useMemo<AnimationProps>(
    (): AnimationProps =>
      getUpdatedAnimationProps(path, currentTime, width, height, existance),
    [path, currentTime, width, height, existance]
  );

  const animationRef = useRef<TimelineLite>(undefined);

  const prevPropsRef = useRef<AnimationProps>(undefined);

  useEffect((): void => {
    animationRef.current = getUpdatedAnimation(
      animationRef.current,
      prevPropsRef.current,
      animationProps,
      (): HTMLDivElement => divEl.current
    );
    prevPropsRef.current = animationProps;
  }, [animationProps]);

  let style = {};

  if (!playback || (playback && dragged)) {
    style = {
      top: `calc(${offsetY}% - ${5}px)`,
      left: `calc(${offsetX}% - ${5}px)`
    };
  } else {
    style = { top: `calc(${y}% - ${5}px`, left: `calc(${x}% - ${5}px` };
  }

  const composedClassName = `marker ${className}`;

  let tagMarkerClassName = '';

  if (isCurrent) tagMarkerClassName = 'tag-marker';

  return (
    /* eslint-disable-next-line */
    <div
      onMouseDown={(
        event: React.MouseEvent<HTMLDivElement, MouseEvent>
      ): void => {
        event.stopPropagation();
        onMouseDown();
      }}
      onMouseUp={(): void => {
        onMouseUp();
      }}
      className={composedClassName}
      style={style}
      ref={divEl}
    >
      <svg width="10px" height="10px">
        <rect
          className={tagMarkerClassName}
          width="10px"
          height="10px"
          fill="red"
        />
      </svg>
    </div>
  );
};

export default Tag;
