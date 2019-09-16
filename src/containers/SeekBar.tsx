import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import SeekBar, { FuncProps as SeekBarFuncProps } from '../components/SeekBar';
import mousePressedOnSeekBar from '~/actions/ui/player/seekbar/mouse-down-on-seekbar';
import mouseUpDuringSeekbarSeeking from '~/actions/ui/player/seekbar/mouse-up-during-seekbar-seeking';
import mouseMoveDuringSeekbarSeeking from '~/actions/ui/player/seekbar/mouse-move-during-seekbar-seeking';

const mapDispatchToProps = (dispatch: Dispatch): SeekBarFuncProps => ({
  onMouseDown: (relativePosition: number): void => {
    dispatch(mousePressedOnSeekBar({ position: relativePosition }));
  },
  onMouseUp: (): void => {
    dispatch(mouseUpDuringSeekbarSeeking());
  },
  onMouseMove: (relativePosition: number): void => {
    dispatch(mouseMoveDuringSeekbarSeeking({ position: relativePosition }));
  }
});

export default connect(
  undefined,
  mapDispatchToProps
)(SeekBar);
