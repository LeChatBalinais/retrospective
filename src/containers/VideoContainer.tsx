import React from 'react';
import { connect } from 'react-redux';
import store from '../store';
import Video from '../components/Video';
import { setCurrentTime, setDuration } from '../actionCreators';
import { State } from '../types/state';

interface Props {
  playback: boolean;
  url: string;
  currentTime: number;
}

const PlayerContainer = ({
  playback,
  url,
  currentTime
}: Props): JSX.Element => (
  <Video
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
}: State): Props => ({
  playback: playback && !userSeek,
  url,
  currentTime
});

export default connect(mapStateToProps)(PlayerContainer);
