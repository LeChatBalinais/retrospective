import React from 'react';
import { connect } from 'react-redux';
import store from '../store';
import VideoComponent from '../components/Video';
import { setCurrentTime, setDuration } from '../actions/actionCreators';
import { State } from '../types/state';

interface Props {
  playback: boolean;
  url: string;
  currentTime: number;
}

const Video = ({ playback, url, currentTime }: Props): JSX.Element => (
  <VideoComponent
    {...{ playback, url, currentTime }}
    onTimeUpdate={(videoCurrentTime: number): void => {
      store.dispatch(setCurrentTime(videoCurrentTime));
    }}
    onDurationChange={(duration: number): void => {
      store.dispatch(setDuration(duration));
    }}
  />
);

const mapStateToProps = ({
  superVideoState: { playback, url, currentTime, userSeek }
}: State): Props => {
  const synthPlayback = playback && !userSeek;

  return {
    playback: synthPlayback,
    url,
    currentTime: synthPlayback ? undefined : currentTime
  };
};

export default connect(mapStateToProps)(Video);
