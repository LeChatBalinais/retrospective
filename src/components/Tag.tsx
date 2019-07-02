import React from 'react';
import { TimelineLite } from 'gsap';
import {
  DEFAULT_ANIMATION_PROPS,
  AnimationProps,
  getUpdatedAnimation,
  getUpdatedAnimationProps,
  getAnimationPropsWithUpdatedTarget
} from '../interactivity/element-animation';

interface Props {
  x: number;
  y: number;
  offsetX: number;
  offsetY: number;
  duration: number;
  path: { time: number; x: number; y: number }[];
  currentTime: number;
  className: string;
  dragged: boolean;
  playback: boolean;
}

class Tag extends React.Component<Props, {}> {
  public constructor(props: Props) {
    super(props);

    this.animationProps = DEFAULT_ANIMATION_PROPS;
    this.animation = undefined;
  }

  public componentDidMount(): void {
    this.animation = getUpdatedAnimation(
      this.animation,
      undefined,
      this.animationProps
    );
    this.prevAnimationProps = this.animationProps;
  }

  public componentDidUpdate(): void {
    this.animation = getUpdatedAnimation(
      this.animation,
      this.prevAnimationProps,
      this.animationProps
    );
    this.prevAnimationProps = this.animationProps;
  }

  private animationProps: AnimationProps;

  private prevAnimationProps: AnimationProps;

  private animation: TimelineLite;

  public render(): JSX.Element {
    const {
      x,
      y,
      offsetX,
      offsetY,
      path,
      currentTime,
      className,
      dragged,
      playback
    } = this.props;

    if (playback)
      this.animationProps = getUpdatedAnimationProps(
        this.animationProps,
        { width: 5, height: 5 },
        path,
        currentTime
      );
    else this.animationProps = undefined;

    let style = {};

    if (!playback) {
      if (!dragged) {
        style = {
          top: `calc(${offsetY}% - ${5}px)`,
          left: `calc(${offsetX}% - ${5}px)`
        };
      }
    } else {
      style = { top: `calc(${y}% - ${5}px`, left: `calc(${x}% - ${5}px` };
    }

    const composedClassName = `marker ${className}`;

    return (
      <div
        className={composedClassName}
        style={style}
        ref={(circle: HTMLDivElement): void => {
          this.animationProps = getAnimationPropsWithUpdatedTarget(
            this.animationProps,
            circle
          );
        }}
      >
        <svg width="10px" height="10px">
          <rect width="10px" height="10px" fill="red" />
        </svg>
      </div>
    );
  }
}

export default Tag;
