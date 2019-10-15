import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import SeekPreview, { ValueProps, FuncProps } from '~/components/SeekPreview';
import { State, VideoStatus, SeekingStatus } from '~/state';
import { actionCreator as videoSeeked } from '~/actions-reducers/ui-player-seekpreview-seeked';
import { actionCreator as videoSeeking } from '~/actions-reducers/ui-player-seekpreview-seeking';
import {
  getLastRequestedStage,
  getSeekingStatus,
  getSeekPreviewStatus,
  getStageVideoAt,
  getStageSeekPreviewAt
} from '~/getters/player';
import { getVideoDuration, getSeekPreviewURL } from '~/getters/footage';

const getTimeSeekTo = (state: State): number =>
  getLastRequestedStage(state) * getVideoDuration(state);

const shouldVideoSeek = (state: State): boolean =>
  getSeekPreviewStatus(state) !== VideoStatus.Seeking &&
  getSeekingStatus(state) !== SeekingStatus.NoSeeking;

const seekPreviewIsVisible = (state: State): boolean => true;
// getSeekingStatus(state) === SeekingStatus.SeekbarSeeking;
// &&
// getStageVideoAt(state) !== getLastRequestedStage(state) &&
// getStageSeekPreviewAt(state) === getLastRequestedStage(state);

const mapStateToProps = (state: State): ValueProps => {
  return {
    url: getSeekPreviewURL(state),
    seek: shouldVideoSeek(state),
    timeSeekTo: getTimeSeekTo(state),
    hidden: !seekPreviewIsVisible(state)
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
