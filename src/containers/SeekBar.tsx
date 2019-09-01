import { Dispatch } from 'react';
import { connect } from 'react-redux';
import SeekBar, { FuncProps as SeekBarFuncProps } from '../components/SeekBar';
import setRequestedTime from '../actions/set-requested-normalized-time';
import {
  Action,
  SetUserSeekPayload,
  SetRequestedNormalizedTimePayload
} from '../types';
import setUserSeek from '../actions/set-user-seek';
import actionCombination from '../utils/action-combination';

const mapDispatchToProps = (dispatch: Dispatch<Action>): SeekBarFuncProps => ({
  onMouseDown: (relativePosition: number): void => {
    dispatch(
      actionCombination<SetUserSeekPayload & SetRequestedNormalizedTimePayload>(
        [setUserSeek, setRequestedTime]
      )({ mode: true, time: relativePosition / 100 })
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
