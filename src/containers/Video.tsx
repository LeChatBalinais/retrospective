import { Dispatch } from 'react';
import { connect } from 'react-redux';
import Video, { ValueProps, FuncProps } from '../components/Video';
import setCurrentTime from '../actions/set-current-time';
import setDuration from '../actions/set-duration';
import { State } from '../types/state';
import isVideoPlaying from '../selectors/is-video-playing';
import { getVideoURL, getCurrentTime } from '../selectors/selectors';
import { Action } from '../types/types';

const mapStateToProps = (state: State): ValueProps => {
  return {
    playback: isVideoPlaying(state),
    url: getVideoURL(state),
    currentTime: getCurrentTime(state)
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>): FuncProps => ({
  onTimeUpdate: (time: number): void => {
    dispatch(setCurrentTime({ time, isNormalized: false }));
  },
  onDurationChange: (duration: number): void => {
    dispatch(setDuration({ duration }));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Video);
