import { connect } from 'react-redux';
import SeekBar, { FuncProps as SeekBarFuncProps } from '../components/SeekBar';
import setRequestedTime from '../actions/set-stage-seek-to';
import {
  SetVideoStatusPayload,
  SetStageSeekToPayload,
  VideoStatus,
  ThunkDispatch
} from '../types';
import setVideoStatus from '../actions/set-video-status';
import actionCombination from '../utils/action-combination';
import turnOffSeekingMode from '../thunks/turn-off-seeking-mode';

const mapDispatchToProps = (dispatch: ThunkDispatch): SeekBarFuncProps => ({
  onMouseDown: (relativePosition: number): void => {
    dispatch(
      actionCombination<SetVideoStatusPayload & SetStageSeekToPayload>([
        setVideoStatus,
        setRequestedTime
      ])({ status: VideoStatus.Paused, time: relativePosition / 100 })
    );
  },
  onMouseUp: (): void => {
    dispatch(turnOffSeekingMode());
  },
  onMouseMove: (relativePosition: number): void => {
    dispatch(setRequestedTime({ time: relativePosition / 100 }));
  }
});

export default connect(
  undefined,
  mapDispatchToProps
)(SeekBar);
