import React from 'react';
import { connect } from 'react-redux';
import { State } from '../types/state';
import SeekBarSliderComponent from '../components/SeekBarSlider';

interface Props {
  duration: number;
  currentTime: number;
}

const SeekBarCurrentTimeSlider = ({
  currentTime,
  duration
}: Props): JSX.Element => (
  <SeekBarSliderComponent
    {...{
      position: (currentTime / duration) * 100,
      className: 'slider-current-time'
    }}
  />
);

const mapStateToProps = ({
  superVideoState: { duration, currentTime }
}: State): Props => ({
  duration,
  currentTime
});

export default connect(mapStateToProps)(SeekBarCurrentTimeSlider);
