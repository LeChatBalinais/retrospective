import React from 'react';
import { connect } from 'react-redux';
import store from '../store';
import Video from '../components/Video';
import { setCurrentTime, setDuration } from '../actionCreators';

const PlayerContainer = ({ playback, url, currentTime }) => (
  <Video
    {...{ playback, url, currentTime }}
    onTimeUpdate={videoCurrentTime => {
      store.dispatch(setCurrentTime(videoCurrentTime));
    }}
    onDurationChange={duration => {
      store.dispatch(setDuration(duration));
    }}
  />
);

const mapStateToProps = ({
  superVideoState: { playback, url, currentTime, userSeek }
}) => ({
  playback: playback && !userSeek,
  url,
  currentTime
});

export default connect(mapStateToProps)(PlayerContainer);
