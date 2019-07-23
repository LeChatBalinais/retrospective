import { Dispatch } from 'react';
import { connect } from 'react-redux';
import { Props as VideoProps, Video } from '../components/Video';
import { setCurrentTime, setDuration } from '../actions/actionCreators';
import { State } from '../types/state';
import isVideoPlaying from '../selectors/is-video-playing';
import { getVideoURL, getCurrentTime } from '../selectors/selectors';
import { Action } from '../types/action';

const mapStateToProps = (state: State): VideoProps => {
  return {
    playback: isVideoPlaying(state),
    url: getVideoURL(state),
    currentTime: isVideoPlaying(state) ? undefined : getCurrentTime(state)
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<Action>
): {
  onTimeUpdate: (videoCurrentTime: number) => void;
  onDurationChange: (duration: number) => void;
} => ({
  onTimeUpdate: (videoCurrentTime: number): void => {
    dispatch(setCurrentTime(videoCurrentTime));
  },
  onDurationChange: (duration: number): void => {
    dispatch(setDuration(duration));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Video);
