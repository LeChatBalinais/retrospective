import { connect } from 'react-redux';
import { State, SeekingStatus } from '~/state';
import SeekBarSlider, {
  ValueProps as SeekBarSliderValueProps
} from '~/components/SeekBarSlider';
import {
  getSeekingStatus,
  getLastRequestedStage,
  getStageVideoAt
} from '~/getters/player';

const getSliderPosition = (state: State): number => {
  const normalizedPosition =
    getSeekingStatus(state) !== SeekingStatus.NoSeeking
      ? getLastRequestedStage(state)
      : getStageVideoAt(state);
  return normalizedPosition * 100;
};

const mapStateToProps = (state: State): SeekBarSliderValueProps => {
  return {
    position: getSliderPosition(state),
    className: 'slider-current-time'
  };
};

export default connect(mapStateToProps)(SeekBarSlider);
