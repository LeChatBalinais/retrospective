import { connect } from 'react-redux';
import Video, { ValueProps, FuncProps } from '../components/Video';
import setCurrentTime from '../thunks/set-current-time';
import setDuration from '../actions/set-duration';
import {
  getVideoURL,
  getVideoStatus,
  getUserSeek,
  getSeekBarCurrentStage,
  getVideoDuration,
  shouldPlayVideo
} from '../selectors/selectors';
import { State, ThunkDispatch, VideoStatus } from '../types';
import videoSeeking from '~/actions/player/video/video-seeking';
import videoSeeked from '~/actions/player/video/video-seeked';

const mapStateToProps = (state: State): ValueProps => {
  return {
    playback: shouldPlayVideo(state),
    url: getVideoURL(state),
    seek: getVideoStatus(state) !== VideoStatus.Seeking && getUserSeek(state),
    timeSeekTo: getSeekBarCurrentStage(state) * getVideoDuration(state)
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch): FuncProps => ({
  onTimeUpdate: (time: number): void => {
    dispatch(setCurrentTime({ time }));
  },
  onDurationChange: (duration: number): void => {
    dispatch(setDuration({ duration }));
  },
  onSeeking: (time: number): void => {
    dispatch(videoSeeking({ time }));
  },
  onSeeked: (): void => {
    dispatch(videoSeeked());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Video);
