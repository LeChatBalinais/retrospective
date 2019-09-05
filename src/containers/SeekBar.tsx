import { connect } from 'react-redux';
import SeekBar, { FuncProps as SeekBarFuncProps } from '../components/SeekBar';
import setRequestedTime from '../actions/set-stage-seek-to';
import {
  SetStageSeekToPayload,
  SetUserSeekPayload,
  SeekingStatus,
  ThunkDispatch
} from '../types';
import setUserSeek from '../actions/set-user-seek';
import actionCombination from '../utils/action-combination';

const mapDispatchToProps = (dispatch: ThunkDispatch): SeekBarFuncProps => ({
  onMouseDown: (relativePosition: number): void => {
    dispatch(
      actionCombination<SetStageSeekToPayload & SetUserSeekPayload>([
        setUserSeek,
        setRequestedTime
      ])({ status: SeekingStatus.Seeking, time: relativePosition / 100 })
    );
  },
  onMouseUp: (): void => {
    dispatch(setUserSeek({ status: SeekingStatus.Idle }));
  },
  onMouseMove: (relativePosition: number): void => {
    dispatch(setRequestedTime({ time: relativePosition / 100 }));
  }
});

export default connect(
  undefined,
  mapDispatchToProps
)(SeekBar);
