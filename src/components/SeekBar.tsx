import React from 'react';
import SeekBarCurrentTimeSlider from '../containers/SeekBarCurrentTimeSlider';
import {
  MouseListenerProps,
  newMouseListenerProps,
  newMouseListener
} from '../interactivity/track-pointer-on';

export interface FuncProps {
  onMouseDown: (relativePosition: number) => void;
  onMouseMove: (relativePosition: number) => void;
  onMouseUp: () => void;
}

type Props = FuncProps;

export class SeekBar extends React.Component<Props, {}> {
  public constructor(props: Props) {
    super(props);

    this.setRef = (ribbon: HTMLDivElement): void => {
      this.ribbon = ribbon;
    };

    this.getTarget = (): HTMLDivElement => {
      return this.ribbon;
    };
  }

  private setRef: (ribbon: HTMLDivElement) => void;

  private getTarget: () => HTMLDivElement;

  private mouseListenerProps: MouseListenerProps;

  private mouseDownListener: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void;

  private ribbon: HTMLDivElement;

  public render(): JSX.Element {
    const { onMouseDown, onMouseUp, onMouseMove } = this.props;

    const newProps = newMouseListenerProps(
      onMouseUp,
      onMouseDown,
      onMouseMove,
      this.getTarget,
      this.mouseListenerProps
    );

    this.mouseDownListener = newMouseListener(
      this.mouseListenerProps,
      newProps,
      this.mouseDownListener
    );

    return (
      <div className="box seek-bar-box">
        <div className="ribbon-container">
          {/* eslint-disable-next-line */}
          <div
            className="ribbon"
            ref={this.setRef}
            onMouseDown={this.mouseDownListener}
          />
          <div className="slider-container">
            <SeekBarCurrentTimeSlider />
          </div>
        </div>
      </div>
    );
  }
}
