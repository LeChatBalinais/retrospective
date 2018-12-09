// @flow
import React from 'react';
import type {
  TagInteractivity,
  TagInteractivityProps
} from '../tag-interactivity/tag-interactivity-type';
import updateInteractivity from '../tag-interactivity/tag-interactivity';
import {
  DEFAULT_TAG_INTERACTIVITY_PROPS,
  updateDraggable,
  updateOnDragBegin,
  updateOnDrag,
  updateOnDragEnd
} from '../tag-interactivity/tag-interactivity-props';

type Props = {
  className: string,
  x: number,
  y: number,
  offsetX: number,
  offsetY: number,
  playback: boolean,
  dragged: boolean,
  onDragBegin: (number, number) => void,
  onDrag: (number, number) => void,
  onDragEnd: (number, number) => void
};

type State = {};

class Tag extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.interactivityProps = DEFAULT_TAG_INTERACTIVITY_PROPS;
  }

  componentDidMount() {
    this.interactivity = { draggable: undefined, animation: undefined };

    this.interactivity = updateInteractivity(
      this.prevInteractivityProps,
      this.interactivityProps
    )(this.interactivity);
  }

  interactivity: ?TagInteractivity;

  prevInteractivityProps: TagInteractivityProps;

  interactivityProps: TagInteractivityProps;

  render() {
    const {
      x,
      y,
      offsetX,
      offsetY,
      className,
      dragged,
      playback,
      onDragBegin,
      onDrag,
      onDragEnd
    } = this.props;

    this.prevInteractivityProps = this.interactivityProps;

    this.interactivityProps = updateOnDragEnd(
      updateOnDrag(
        updateOnDragBegin(
          updateDraggable(this.interactivityProps, !playback || dragged),
          onDragBegin
        ),
        onDrag
      ),
      onDragEnd
    );

    if (this.interactivity) {
      this.interactivity = updateInteractivity(
        this.prevInteractivityProps,
        this.interactivityProps
      )(this.interactivity);
    }

    return (
      <circle
        cx={x}
        cy={y}
        transform={`matrix(1,0,0,1,${offsetX},${offsetY})`}
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
