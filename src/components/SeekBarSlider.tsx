import React from 'react';

type onSeekFunc = (currentTime: number) => void;

interface Props {
  position: number;
  className: string;
}

class SeekBarSlider extends React.Component<Props, {}> {
  private setRef: (slider: HTMLDivElement) => void;

  public render(): JSX.Element {
    const { className, position } = this.props;

    const style = {
      left: `calc(${position}% - 7px`
    };

    return <div {...{ className }} style={style} ref={this.setRef} />;
  }
}

export default SeekBarSlider;
