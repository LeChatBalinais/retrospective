import React from 'react';
import updateInteractivity from '../tag-interactivity/tag-interactivity';
import {
  DEFAULT_TAG_INTERACTIVITY_PROPS,
  updateCurrentTime,
  updateDraggable,
  updateOnDragBegin,
  updateOnDrag,
  updateOnDragEnd,
  updateDuration,
  updatePath
} from '../tag-interactivity/tag-interactivity-props';

interface Props {
  x: number;
  y: number;
  offsetX: number;
  offsetY: number;
  duration: number;
  path: any;
  currentTime: number;
  className: string;
  dragged: boolean;
  playback: boolean;
  onDragBegin(x: number, y: number): void;
  onDrag(x: number, y: number): void;
  onDragEnd(x: number, y: number): void;
}

class Tag extends React.Component<Props, any> {
  public constructor(props) {
    super(props);

    this.interactivityProps = DEFAULT_TAG_INTERACTIVITY_PROPS;
  }

  public componentDidMount() {
    this.interactivity = { draggable: undefined, animation: undefined };

    this.interactivity = updateInteractivity(
      this.prevInteractivityProps,
      this.interactivityProps
    )(this.interactivity);
  }

  private interactivityProps: any;

  private interactivity: any;

  private prevInteractivityProps: any;

  public render() {
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

    let transform = {};

    if (!playback && !dragged)
      transform = { transform: `matrix(1,0,0,1,${offsetX},${offsetY})` };

    return (
      <circle
        cx={x}
        cy={y}
        {...transform}
        r={3}
        stroke="red"
        strokeWidth="3"
        fill="red"
        className={className}
        ref={circle => {
          this.interactivityProps = {
            ...this.interactivityProps,
            target: circle
          };
        }}
      />
    );
  }
}

export default Tag;
