// @flow
import React from 'react';

type Props = {
  duration: number,
  currentTime: number,
  onSeek: number => void
};

function createOnChange(onSeek: number => void) {
  return (event: SyntheticInputEvent<EventTarget>) => {
    const value = parseInt(event.target.value, 10);
    onSeek(value);
  };
}

const Button = ({ currentTime, duration, onSeek }: Props) => (
  <input
    type="range"
    min={0}
    max={duration}
    value={currentTime}
    onChange={createOnChange(onSeek)}
  />
);
export default Button;
