import { connect } from 'react-redux';
import Video, { ValueProps, FuncProps } from '../components/Video';
import setCurrentTime from '../thunks/set-current-time';
import setDuration from '../actions/set-duration';
import isVideoPlaying from '../selectors/is-video-playing';
import { getVideoURL, getStageSeekTo } from '../selectors/selectors';
import { State, ThunkDispatch } from '../types';

const mapStateToProps = (state: State): ValueProps => {
  return {
    playback: isVideoPlaying(state),
    url: getVideoURL(state),
    currentTime: getStageSeekTo(state)
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch): FuncProps => ({
  onTimeUpdate: (time: number): void => {
    dispatch(setCurrentTime({ time }));
  },
  onDurationChange: (duration: number): void => {
    dispatch(setDuration({ duration }));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Video);
