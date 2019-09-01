import { connect } from 'react-redux';
import { State } from '../types';
import SeekBarSlider, {
  ValueProps as SeekBarSliderValueProps
} from '../components/SeekBarSlider';
import { getAboutToBeCurrentNormalizedTime } from '../selectors/selectors';

const mapStateToProps = (state: State): SeekBarSliderValueProps => {
  return {
    position: getAboutToBeCurrentNormalizedTime(state) * 100,
    className: 'slider-current-time'
  };
};

export default connect(mapStateToProps)(SeekBarSlider);
