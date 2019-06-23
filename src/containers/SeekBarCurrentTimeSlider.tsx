import React from 'react';
import { connect } from 'react-redux';
import { State } from '../types/state';
import SeekBarSliderComponent from '../components/SeekBarSlider';
import store from '../store';
import { setCurrentTime, setUserSeek } from '../actionCreators';

interface Props {
  duration: number;
  currentTime: number;
  userSeek: boolean;
}

function createOnSeek(duration: number): (currentPosition: number) => void {
  return (currentPosition: number): void => {
    store.dispatch(setCurrentTime(duration * currentPosition / 100));
  };
}

function onMouseDown(): void {
  store.dispatch(setUserSeek(true));
}

function onMouseUp(): void {
  store.dispatch(setUserSeek(false));
}

const SeekBarCurrentTimeSlider = ({
  currentTime,
  duration,
  userSeek
}: Props): JSX.Element => (
    <SeekBarSliderComponent
      {...{
        position: (currentTime / duration) * 100,
        className: 'slider-current-time',
        userSeek,
        onSeek: createOnSeek(duration),
        onMouseDown,
        onMouseUp
      }}
    />
  );

const mapStateToProps = ({
  superVideoState: { duration, currentTime, userSeek }
}: State): Props => ({
  duration,
  currentTime,
  userSeek
});

export default connect(mapStateToProps)(SeekBarCurrentTimeSlider);
