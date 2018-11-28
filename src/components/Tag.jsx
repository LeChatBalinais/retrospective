// @flow
import React from 'react';
import Draggableness from '../augmented-video-player/draggableness/draggableness';

type Props = {
  className: string,
  x: number,
  y: number,
  playback: boolean,
  dragged: boolean,
  onDragBegin: (number, number) => void,
  onDrag: (number, number) => void,
  onDragEnd: (number, number) => void
};

type State = {};

class Tag extends React.Component<Props, State> {
  componentDidMount() {
    const { updateInteractivnessOnMount } = this;
    if (updateInteractivnessOnMount) updateInteractivnessOnMount();
  }

  onDragBegin: ?(number, number) => void;

  onDrag: ?(number, number) => void;

  onDragEnd: ?(number, number) => void;

  makeDraggable = () => {
    const { circle } = this;

    if (!circle) return;

    this.draggableness = new Draggableness(
      { el: circle },
      '#bounds',
      this.onDragBegin,
      this.onDrag,
      this.onDragEnd
    );
  };

  makeNondraggable = () => {
    if (this.draggableness) this.draggableness.kill();
    this.draggableness = undefined;
  };

  updateInteractivness(playback: boolean) {
    const { draggableness, dragged } = this;

    if (!draggableness && !playback) return this.makeDraggable;

    if (this.draggableness && playback && !dragged)
      return this.makeNondraggable;

    return () => {};
  }

  circle: ?any;

  draggableness: ?any;

  dragged: boolean;

  updateInteractivnessOnMount: ?() => void;

  render() {
    const {
      x,
      y,
      className,
      dragged,
      playback,
      onDragBegin,
      onDrag,
      onDragEnd
    } = this.props;

    this.dragged = dragged;

    if (!this.onDragBegin) this.onDragBegin = onDragBegin;
    if (!this.onDrag) this.onDrag = onDrag;
    if (!this.onDragEnd) this.onDragEnd = onDragEnd;

    const updateInteractivness = this.updateInteractivness(playback);

    if (!this.updateInteractivnessOnMount)
      this.updateInteractivnessOnMount = updateInteractivness;
    else if (updateInteractivness) updateInteractivness();

    return (
      <circle
        cx={x}
        cy={y}
        r={3}
        stroke="red"
        strokeWidth="3"
        fill="red"
        className={className}
        ref={circle => {
          this.circle = circle;
        }}
      />
    );
  }
}

export default Tag;
