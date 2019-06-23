import React from 'react';
import {
  Interactivity,
  updateInteractivity
} from '../interactivity/slider-interactivity';
import {
  InteractivityProps,
  DEFAULT_TAG_INTERACTIVITY_PROPS,
  updateDraggable,
  updateOnDrag,
  updateOnDragBegin,
  updateOnDragEnd
} from '../interactivity/slider-interactivity-props';

type onSeekFunc = (currentTime: number) => void;

interface Props {
  position: number;
  className: string;
  onSeek: onSeekFunc;
  userSeek: boolean;
  onMouseDown: () => void;
  onMouseUp: () => void;
}

class SeekBarSlider extends React.Component<Props, {}> {
  public constructor(props: Props) {
    super(props);

    this.interactivityProps = DEFAULT_TAG_INTERACTIVITY_PROPS;
    this.updateDraggable = true;
  }

  public componentDidMount(): void {
    this.interactivity = { draggable: undefined };

    this.interactivity = updateInteractivity(
      this.prevInteractivityProps,
      this.interactivityProps
    )(this.interactivity);
  }

  public componentDidUpdate(): void {
    if (this.updateDraggable) {
      if (this.interactivity) {
        const { interactivity } = this
        if (interactivity.draggable) {

          console.log(this.interactivityProps.target);
          interactivity.draggable.update();
        }
      };
    }
  }

  private updateDraggable: boolean;

  private interactivityProps: InteractivityProps;

  private interactivity: Interactivity;

  private prevInteractivityProps: InteractivityProps;

  private position: number;

  public render(): JSX.Element {
    const {
      className,
      position,
      userSeek,
      onMouseDown: onDragBegin,
      onMouseUp: onDragEnd,
      onSeek: onDrag
    } = this.props;

    this.prevInteractivityProps = this.interactivityProps;

    this.interactivityProps = updateDraggable(this.interactivityProps, true);

    this.interactivityProps = updateOnDragBegin(
      this.interactivityProps,
      onDragBegin
    );
    this.interactivityProps = updateOnDrag(this.interactivityProps, onDrag);
    this.interactivityProps = updateOnDragEnd(
      this.interactivityProps,
      onDragEnd
    );



    let style;
    if (userSeek) {
      this.updateDraggable = false;
      style = { left: `${this.position}%` };
    }
    else {
      this.updateDraggable = true;
      this.position = position
      style = { left: `${position}%`, transform: `translate3d(0px,0px,0px)` }
      console.log(style)
    }

    return (
      <div
        {...{ className }}
        style={style}
        ref={(slider: HTMLDivElement): void => {
          this.interactivityProps = {
            ...this.interactivityProps,
            target: slider
          };
          console.log("ref")
        }}
      />
    );
  }
}

export default SeekBarSlider;
