import { connect } from 'react-redux';
import SeekBar, { FuncProps as SeekBarFuncProps } from '../components/SeekBar';
import setRequestedTime from '../actions/set-stage-seek-to';
import { SeekingStatus, ThunkDispatch } from '../types';
import setUserSeek from '../actions/set-user-seek';
import mousePressedOnSeekBar from '~/actions/player/seekbar/mouse-down-on-seekbar';

const mapDispatchToProps = (dispatch: ThunkDispatch): SeekBarFuncProps => ({
  onMouseDown: (relativePosition: number): void => {
    dispatch(mousePressedOnSeekBar({ position: relativePosition }));
  },
  onMouseUp: (): void => {
    dispatch(setUserSeek({ status: SeekingStatus.NoSeeking }));
  },
  onMouseMove: (relativePosition: number): void => {
    dispatch(setRequestedTime({ time: relativePosition / 100 }));
  }
});

export default connect(
  undefined,
  mapDispatchToProps
)(SeekBar);
