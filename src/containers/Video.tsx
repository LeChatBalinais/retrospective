import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Video, { ValueProps, FuncProps } from '../components/Video';
import { State } from '~/types/state';
import { actionCreator as videoPlayedToTime } from '~/actions-reducers/ui-player-video-played-to-time';
import { actionCreator as videoSeeked } from '~/actions-reducers/ui-player-video-seeked';
import { actionCreator as videoSeeking } from '~/actions-reducers/ui-player-video-seeking';
import { actionCreator as videoDurationChanged } from '~/actions-reducers/ui-player-video-duration-changed';

import {
  shouldVideoSeek,
  getVideoURL,
  shouldVideoPlayback,
  getTimeSeekTo
} from '~/selectors';

const mapStateToProps = (state: State): ValueProps => {
  return {
    playback: shouldVideoPlayback(state),
    url: getVideoURL(state),
    seek: shouldVideoSeek(state),
    timeSeekTo: getTimeSeekTo(state)
  };
};

const mapDispatchToProps = (dispatch: Dispatch): FuncProps => ({
  onTimeUpdate: (time: number): void => {
    dispatch(videoPlayedToTime({ time }));
  },
  onDurationChange: (duration: number): void => {
    dispatch(videoDurationChanged({ duration }));
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
