import { Dispatch } from 'react';
import { connect } from 'react-redux';
import SeekBar, { FuncProps as SeekBarFuncProps } from '../components/SeekBar';
import {
  setCurrentTime,
  setUserSeek,
  actionCombination
} from '../actions/actionCreators';
import { Action } from '../types/action';

const mapDispatchToProps = (dispatch: Dispatch<Action>): SeekBarFuncProps => ({
  onMouseDown: (relativePosition: number): void => {
    dispatch(
      actionCombination([
        setUserSeek(true),
        setCurrentTime(relativePosition / 100, true)
      ])
    );
  },
  onMouseUp: (): void => {
    dispatch(setUserSeek(false));
  },
  onMouseMove: (relativePosition: number): void => {
    dispatch(setCurrentTime(relativePosition / 100, true));
  }
});

export default connect(
  undefined,
  mapDispatchToProps
)(SeekBar);
