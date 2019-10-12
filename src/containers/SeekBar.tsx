import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import SeekBar, { FuncProps as SeekBarFuncProps } from '~/components/SeekBar';
import { actionCreator as mousePressedOnSeekBar } from '~/actions-reducers/ui-player-seekbar-mouse-down';
import { actionCreator as mouseUpDuringSeekbarSeeking } from '~/actions-reducers/ui-player-seekbar-mouse-up-during-seeking';
import { actionCreator as mouseMoveDuringSeekbarSeeking } from '~/actions-reducers/ui-player-seekbar-mouse-move-during-seeking';

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
