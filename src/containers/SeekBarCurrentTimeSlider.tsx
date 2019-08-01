import { connect } from 'react-redux';
import { State } from '../types/state';
import SeekBarSlider, {
  ValueProps as SeekBarSliderValueProps
} from '../components/SeekBarSlider';
import { getCurrentNormalizedTime } from '../selectors/selectors';

const mapStateToProps = (state: State): SeekBarSliderValueProps => {
  return {
    position: getCurrentNormalizedTime(state),
    className: 'slider-current-time'
  };
};

export default connect(mapStateToProps)(SeekBarSlider);
