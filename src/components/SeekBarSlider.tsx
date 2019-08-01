import React from 'react';

type onSeekFunc = (currentTime: number) => void;

export interface ValueProps {
  position: number;
  className: string;
}

type Props = ValueProps;

export const SeekBarSlider = (props: ValueProps): JSX.Element => {
  const { className, position } = props;

  const style = {
    left: `calc(${position}% - 7px`
  };

  return <div {...{ className }} style={style} />;
};
