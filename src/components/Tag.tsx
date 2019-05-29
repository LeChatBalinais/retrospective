import React from 'react';
import {
  Interactivity,
  updateInteractivity
} from '../tag-interactivity/tag-interactivity';
import {
  DEFAULT_TAG_INTERACTIVITY_PROPS,
  updateCurrentTime,
  updateDraggable,
  updateOnDragBegin,
  updateOnDrag,
  updateOnDragEnd,
  updateDuration,
  updatePath,
  InteractivityProps,
  OnDragFunc
} from '../tag-interactivity/tag-interactivity-props';

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
  onDragBegin: OnDragFunc;
  onDrag: OnDragFunc;
  onDragEnd: OnDragFunc;
}

class Tag extends React.Component<Props, {}> {
  public constructor(props: Props) {
    super(props);

    this.interactivityProps = DEFAULT_TAG_INTERACTIVITY_PROPS;
  }

  public componentDidMount(): void {
    this.interactivity = { draggable: undefined, animation: undefined };

    this.interactivity = updateInteractivity(
      this.prevInteractivityProps,
      this.interactivityProps
    )(this.interactivity);
  }

  private interactivityProps: InteractivityProps;

  private interactivity: Interactivity;

  private prevInteractivityProps: InteractivityProps;

  public render(): JSX.Element {
    const {
      x,
      y,
      offsetX,
      offsetY,
      duration,
      path,
      currentTime,
      className,
      dragged,
      playback,
      onDragBegin,
      onDrag,
      onDragEnd
    } = this.props;

    this.prevInteractivityProps = this.interactivityProps;

    this.interactivityProps = updateCurrentTime(
      this.interactivityProps,
      currentTime
    );

    this.interactivityProps = updateDraggable(
      this.interactivityProps,
      !playback || dragged
    );
    this.interactivityProps = updateOnDragBegin(
      this.interactivityProps,
      onDragBegin
    );
    this.interactivityProps = updateOnDrag(this.interactivityProps, onDrag);
    this.interactivityProps = updateOnDragEnd(
      this.interactivityProps,
      onDragEnd
    );
    this.interactivityProps = updateDuration(this.interactivityProps, duration);
    this.interactivityProps = updatePath(this.interactivityProps, path);

    if (this.interactivity) {
      this.interactivity = updateInteractivity(
        this.prevInteractivityProps,
        this.interactivityProps
      )(this.interactivity);
    }

    // if (!playback && !dragged)
    //   transform = { transform: `matrix(1,0,0,1,${offsetX},${offsetY})` };

    const style = { top: `${y}%`, left: `${x}%` };
    const composedClassName = `marker ${className}`;

    return (
      <div
        className={composedClassName}
        style={style}
        ref={(circle: HTMLDivElement): void => {
          this.interactivityProps = {
            ...this.interactivityProps,
            target: circle
          };
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
