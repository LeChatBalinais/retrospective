import React from 'react';

type onSeekFunc = (currentTime: number) => void;

export interface ValueProps {
  position: number;
  className: string;
}

type Props = ValueProps;

export class SeekBarSlider extends React.Component<Props, {}> {
  private setRef: (slider: HTMLDivElement) => void;

  public render(): JSX.Element {
    const { className, position } = this.props;

    const style = {
      left: `calc(${position}% - 7px`
    };

    return <div {...{ className }} style={style} ref={this.setRef} />;
  }
}
