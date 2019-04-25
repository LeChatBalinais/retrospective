import React from 'react';
import { connect } from 'react-redux';
import store from '../store';
import SeekBar from '../components/SeekBar';
import { setCurrentTime, setUserSeek } from '../actionCreators';
import { State } from '../types/state';

interface Props {
  duration: number;
  currentTime: number;
}

function onSeek(currentTime: number): void {
  store.dispatch(setCurrentTime(currentTime));
}

function onMouseDown(): void {
  store.dispatch(setUserSeek(true));
}

function onMouseUp(): void {
  store.dispatch(setUserSeek(false));
}

const PlayButtonContainer = ({ duration, currentTime }: Props): JSX.Element => (
  <SeekBar {...{ duration, currentTime, onMouseDown, onMouseUp, onSeek }} />
);

const mapStateToProps = ({
  superVideoState: { duration, currentTime }
}: State): Props => ({
  duration,
  currentTime
});

export default connect(mapStateToProps)(PlayButtonContainer);
