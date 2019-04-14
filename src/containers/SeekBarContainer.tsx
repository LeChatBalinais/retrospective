import React from 'react';
import { connect } from 'react-redux';
import store from '../store';
import SeekBar from '../components/SeekBar';
import { setCurrentTime, setUserSeek } from '../actionCreators';

function onSeek(currentTime) {
  store.dispatch(setCurrentTime(currentTime));
}

function onMouseDown() {
  store.dispatch(setUserSeek(true));
}

function onMouseUp() {
  store.dispatch(setUserSeek(false));
}

const PlayButtonContainer = ({ duration, currentTime }) => (
  <SeekBar {...{ duration, currentTime, onMouseDown, onMouseUp, onSeek }} />
);

const mapStateToProps = ({ superVideoState: { duration, currentTime } }) => ({
  duration,
  currentTime
});

export default connect(mapStateToProps)(PlayButtonContainer);
