import { Dispatch } from 'react';
import { connect } from 'react-redux';
import SeekBar, { FuncProps as SeekBarFuncProps } from '../components/SeekBar';
import setCurrentTime from '../actions/set-current-time';
import { Action } from '../types/types';
import setUserSeek from '../actions/set-user-seek';
import actionCombination from '../actions/action-combination';

const mapDispatchToProps = (dispatch: Dispatch<Action>): SeekBarFuncProps => ({
  onMouseDown: (relativePosition: number): void => {
    dispatch(
      actionCombination([
        setUserSeek({ mode: true }),
        setCurrentTime({ time: relativePosition / 100, isNormalized: true })
      ])
    );
  },
  onMouseUp: (): void => {
    dispatch(setUserSeek({ mode: false }));
  },
  onMouseMove: (relativePosition: number): void => {
    dispatch(
      setCurrentTime({ time: relativePosition / 100, isNormalized: true })
    );
  }
});

export default connect(
  undefined,
  mapDispatchToProps
)(SeekBar);
