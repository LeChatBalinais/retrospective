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
  getStageVideoAt
} from '~/getters/player';
import { getSeekPreviewURL } from '~/getters/footage';
import { getLastRequestedTime } from '~/selectors/get-last-requested-time';

const shouldSeekpreviewSeek = (state: State): boolean =>
  getSeekPreviewStatus(state) !== VideoStatus.Seeking &&
  getSeekingStatus(state) !== SeekingStatus.NoSeeking;

const seekPreviewIsVisible = (state: State): boolean => {
  return (
    getSeekingStatus(state) !== SeekingStatus.NoSeeking &&
    getLastRequestedStage(state) !== undefined &&
    getStageVideoAt(state) !== getLastRequestedStage(state)
  );
};

const mapStateToProps = (state: State): ValueProps => {
  return {
    url: getSeekPreviewURL(state),
    seek: shouldSeekpreviewSeek(state),
    timeSeekTo: getLastRequestedTime(state),
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
