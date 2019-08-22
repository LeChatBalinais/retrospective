import { Dispatch } from 'react';
import { connect } from 'react-redux';
import SeekBar, { FuncProps as SeekBarFuncProps } from '../components/SeekBar';
import setCurrentTime, {
  SetCurrentNormalizedTimePayload
} from '../actions/set-current-normalized-time';
import { Action } from '../types/types';
import setUserSeek, { SetUserSeekPayload } from '../actions/set-user-seek';
import actionCombination from '../utils/action-combination';

const mapDispatchToProps = (dispatch: Dispatch<Action>): SeekBarFuncProps => ({
  onMouseDown: (relativePosition: number): void => {
    dispatch(
      actionCombination<SetUserSeekPayload & SetCurrentNormalizedTimePayload>([
        setUserSeek,
        setCurrentTime
      ])({ mode: true, time: relativePosition / 100 })
    );
  },
  onMouseUp: (): void => {
    dispatch(setUserSeek({ mode: false }));
  },
  onMouseMove: (relativePosition: number): void => {
    dispatch(setCurrentTime({ time: relativePosition / 100 }));
  }
});

export default connect(
  undefined,
  mapDispatchToProps
)(SeekBar);
