// @flow
import React from 'react';
import { connect } from 'react-redux';
import store from '../store';
import SeekBar from '../components/SeekBar';
import { setCurrentTime } from '../actionCreators';

type Props = {
  duration: number,
  currentTime: number
};

function onSeek(currentTime: number) {
  store.dispatch(setCurrentTime(currentTime));
}

const PlayButtonContainer = ({ duration, currentTime }: Props) => (
  <SeekBar {...{ duration, currentTime }} onSeek={onSeek} />
);

const mapStateToProps = ({ superVideoState: { duration, currentTime } }) => ({
  duration,
  currentTime
});

export default connect(mapStateToProps)(PlayButtonContainer);
