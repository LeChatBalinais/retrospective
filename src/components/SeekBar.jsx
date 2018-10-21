// @flow
import React from 'react';

type Props = {
  duration: number,
  currentTime: number,
  onSeek: number => void,
  onMouseDown: void => void,
  onMouseUp: void => void
};

function createOnChange(onSeek: number => void) {
  return (event: SyntheticInputEvent<EventTarget>) => {
    const value = parseInt(event.target.value, 10);
    onSeek(value);
  };
}

const Button = ({
  currentTime,
  duration,
  onSeek,
  onMouseDown,
  onMouseUp
}: Props) => (
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
export default Button;
