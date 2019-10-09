import React, { useRef, useEffect, useMemo } from 'react';
import { TimelineLite } from 'gsap';
import {
  AnimationProps,
  getUpdatedAnimation,
  getUpdatedAnimationProps
} from '~/interactivity/element-animation';

export interface ValueProps {
  position: { x: number; y: number };
  path: { time: number; x: number; y: number }[];
  timeAt: number;
  className: string;
  isCurrent: boolean;
  isAnimated: boolean;
}

export interface FuncProps {
  onMouseDown: () => void;
  onMouseUp: () => void;
}

export type Props = ValueProps & FuncProps;

const Tag = ({
  position,
  path,
  timeAt,
  className,
  isCurrent,
  isAnimated,
  onMouseDown,
  onMouseUp
}: Props): JSX.Element => {
  const divEl = useRef(null);

  const width = 5;
  const height = 5;

  const animationProps = useMemo<AnimationProps>(
    (): AnimationProps =>
      getUpdatedAnimationProps(path, timeAt, width, height, isAnimated),
    [path, timeAt, width, height, isAnimated]
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

  const style = {
    top: `calc(${position.y}% - ${5}px`,
    left: `calc(${position.x}% - ${5}px`
  };

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
