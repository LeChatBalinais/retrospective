import { Dispatch } from 'react';
import { connect } from 'react-redux';
import SeekBar, { FuncProps as SeekBarFuncProps } from '../components/SeekBar';
import setCurrentTime, {
  SetCurrentTimePayload
} from '../actions/set-current-time';
import { Action } from '../types/types';
import setUserSeek, { SetUserSeekPayload } from '../actions/set-user-seek';
import actionCombination from '../actions/utils/action-combination';

const mapDispatchToProps = (dispatch: Dispatch<Action>): SeekBarFuncProps => ({
  onMouseDown: (relativePosition: number): void => {
    dispatch(
      actionCombination<SetUserSeekPayload & SetCurrentTimePayload>([
        setUserSeek,
        setCurrentTime
      ])({ mode: true, time: relativePosition / 100, isNormalized: true })
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
