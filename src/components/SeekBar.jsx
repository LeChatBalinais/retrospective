import React from 'react';

function createOnChange(onSeek) {
  return event => {
    const value = parseInt(event.target.value, 10);
    onSeek(value);
  };
}

const Button = ({ currentTime, duration, onSeek, onMouseDown, onMouseUp }) => (
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
