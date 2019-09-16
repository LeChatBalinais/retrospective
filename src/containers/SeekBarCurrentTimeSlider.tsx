import { connect } from 'react-redux';
import { State } from '../types';
import SeekBarSlider, {
  ValueProps as SeekBarSliderValueProps
} from '../components/SeekBarSlider';
import { getSeekBarCurrentStage } from '../selectors/selectors';

const mapStateToProps = (state: State): SeekBarSliderValueProps => {
  console.log(getSeekBarCurrentStage(state) * 100);
  return {
    position: getSeekBarCurrentStage(state) * 100,
    className: 'slider-current-time'
  };
};

export default connect(mapStateToProps)(SeekBarSlider);
