import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import SeekPreview, { ValueProps, FuncProps } from '~/components/SeekPreview';
import { State, VideoStatus, SeekingStatus } from '~/state';
import { actionCreator as videoSeeked } from '~/actions-reducers/ui-player-video-seeked';
import { actionCreator as videoSeeking } from '~/actions-reducers/ui-player-video-seeking';
import {
  getLastRequestedStage,
  getVideoStatus,
  getSeekingStatus
} from '~/getters/player';
import { getVideoDuration, getSeekPreviewURL } from '~/getters/footage';

const getTimeSeekTo = (state: State): number =>
  getLastRequestedStage(state) * getVideoDuration(state);

const shouldVideoSeek = (state: State): boolean =>
  getVideoStatus(state) !== VideoStatus.Seeking &&
  getSeekingStatus(state) !== SeekingStatus.NoSeeking;

const mapStateToProps = (state: State): ValueProps => {
  return {
    url: getSeekPreviewURL(state),
    seek: shouldVideoSeek(state),
    timeSeekTo: getTimeSeekTo(state)
  };
};

const mapDispatchToProps = (dispatch: Dispatch): FuncProps => ({
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
)(SeekPreview);
