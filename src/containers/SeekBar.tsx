import React from 'react';
import { connect } from 'react-redux';
import store from '../store';
import { State } from '../types/state';
import SeekBarComponent from '../components/SeekBar';
import { setCurrentTime, setUserSeek } from '../actions/actionCreators';

interface Props {
  duration: number;
}

const SeekBar = ({ duration }: Props): JSX.Element => {
  return (
    <SeekBarComponent
      onMouseDown={(relativePosition: number): void => {
        store.dispatch(setUserSeek(true));
        store.dispatch(setCurrentTime(duration * (relativePosition / 100)));
      }}
      onMouseUp={(): void => {
        store.dispatch(setUserSeek(false));
      }}
      onMouseMove={(relativePosition: number): void => {
        store.dispatch(setCurrentTime(duration * (relativePosition / 100)));
      }}
    />
  );
};

const mapStateToProps = ({ superVideoState: { duration } }: State): Props => ({
  duration
});

export default connect(mapStateToProps)(SeekBar);
