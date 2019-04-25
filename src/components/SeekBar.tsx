import React from 'react';

type onSeekFunc = (currentTime: number) => void;

interface Props {
  currentTime: number;
  duration: number;
  onSeek: onSeekFunc;
  onMouseDown: () => void;
  onMouseUp: () => void;
}

function createOnChange(
  onSeek: onSeekFunc
): (event: React.ChangeEvent<HTMLInputElement>) => void {
  return (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value = parseInt(event.target.value, 10);
    onSeek(value);
  };
}

const SeekBar = ({
  currentTime,
  duration,
  onSeek,
  onMouseDown,
  onMouseUp
}: Props): JSX.Element => (
  <input
    type="range"
    min={0}
    max={duration}
    value={currentTime}
    onChange={createOnChange(onSeek)}
    onMouseDown={onMouseDown}
    onMouseUp={onMouseUp}
  />
);
export default SeekBar;
