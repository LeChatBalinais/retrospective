// @flow
import React from 'react';
import { connect } from 'react-redux';
import store from '../store';
import Video from '../components/Video';
import { setCurrentTime, setDuration } from '../actionCreators';

type Props = {
  playback: boolean,
  url: string,
  currentTime: number
};

const PlayerContainer = ({ playback, url, currentTime }: Props) => (
  <Video
    {...{ playback, url, currentTime }}
    onTimeUpdate={(videoCurrentTime: number) => {
      store.dispatch(setCurrentTime(videoCurrentTime));
    }}
    onDurationChange={(duration: number) => {
      store.dispatch(setDuration(duration));
    }}
  />
);

const mapStateToProps = ({
  superVideoState: { playback, url, currentTime }
}) => ({
  playback,
  url,
  currentTime
});

export default connect(mapStateToProps)(PlayerContainer);
