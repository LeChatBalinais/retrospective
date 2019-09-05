import { connect } from 'react-redux';
import Video, { ValueProps, FuncProps } from '../components/Video';
import setCurrentTime, {
  SetCurrentTimePayload,
  setCurrentTimeMappedAction
} from '../thunks/set-current-time';
import setDuration from '../actions/set-duration';
import isVideoPlaying from '../selectors/is-video-playing';
import {
  getVideoURL,
  getVideoStatus,
  getUserSeek,
  getSeekBarCurrentStage
} from '../selectors/selectors';
import {
  State,
  ThunkDispatch,
  VideoStatus,
  SetVideoStatusPayload
} from '../types';
import { setVideoStatus } from '../actions/set-video-status';

import connectAction, {
  mapStateToActionCreator
} from '../utils/map-state-to-action';

const mapStateToProps = (state: State): ValueProps => {
  return {
    playback: isVideoPlaying(state),
    url: getVideoURL(state),
    seek: getVideoStatus(state) !== VideoStatus.Seeking && getUserSeek(state),
    timeSeekTo: getSeekBarCurrentStage(state)
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch): FuncProps => ({
  onTimeUpdate: (time: number): void => {
    dispatch(setCurrentTime({ time }));
  },
  onDurationChange: (duration: number): void => {
    dispatch(setDuration({ duration }));
  },
  onSeeking: (): void => {
    dispatch(setVideoStatus({ status: VideoStatus.Seeking }));
  },
  onSeeked: (time: number): void => {
    dispatch(
      connectAction<SetVideoStatusPayload & SetCurrentTimePayload>([
        mapStateToActionCreator(setVideoStatus),
        setCurrentTimeMappedAction
      ])({ status: VideoStatus.Playing, time })
    );

    // dispatch(setVideoStatus({ status: VideoStatus.Playing }));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Video);
