import { Dispatch } from 'react';
import { connect } from 'react-redux';
import SeekBar, { FuncProps as SeekBarFuncProps } from '../components/SeekBar';
import setRequestedTime from '../actions/set-stage-seek-to';
import { Action, SetUserSeekPayload, SetStageSeekToPayload } from '../types';
import setUserSeek from '../actions/set-user-seek';
import actionCombination from '../utils/action-combination';

const mapDispatchToProps = (dispatch: Dispatch<Action>): SeekBarFuncProps => ({
  onMouseDown: (relativePosition: number): void => {
    dispatch(
      actionCombination<SetUserSeekPayload & SetStageSeekToPayload>([
        setUserSeek,
        setRequestedTime
      ])({ mode: true, time: relativePosition / 100 })
    );
  },
  onMouseUp: (): void => {
    dispatch(setUserSeek({ mode: false }));
  },
  onMouseMove: (relativePosition: number): void => {
    dispatch(setRequestedTime({ time: relativePosition / 100 }));
  }
});

export default connect(
  undefined,
  mapDispatchToProps
)(SeekBar);
