import React, { useRef, useCallback } from 'react';
import SeekBarCurrentTimeSlider from '../containers/SeekBarCurrentTimeSlider';
import newMouseListener from '../interactivity/track-pointer-on';

export interface FuncProps {
  onMouseDown: (relativePosition: number) => void;
  onMouseMove: (relativePosition: number) => void;
  onMouseUp: () => void;
}

type Props = FuncProps;

const SeekBar = ({
  onMouseDown,
  onMouseUp,
  onMouseMove
}: Props): JSX.Element => {
  const divEl = useRef(null);

  const getTarget = useCallback((): HTMLDivElement => divEl.current, [divEl]);

  const getMouseListener = useCallback(
    (): ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) =>
      newMouseListener(onMouseUp, onMouseDown, onMouseMove, getTarget),
    [onMouseUp, onMouseDown, onMouseMove, getTarget]
  );

  return (
    <div className="box seek-bar-box">
      <div className="ribbon-container">
        {/* eslint-disable-next-line */}
        <div className="ribbon" ref={divEl} onMouseDown={getMouseListener()} />
        <div className="slider-container">
          <SeekBarCurrentTimeSlider />
        </div>
      </div>
    </div>
  );
};

export default SeekBar;
