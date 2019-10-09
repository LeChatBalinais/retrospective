import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import Augmentation, { ValueProps, FuncProps } from '~/components/Augmentation';
import getCurrentlyVisibleTagIDs from '~/selectors/get-currentily-visible-tag-ids';
import { State } from '~/state';
import { actionCreator as mouseDownOnAugmentation } from '~/actions-reducers/ui-player-augmentation-mouse-down';
import { actionCreator as mouseMoveOnAugmentation } from '~/actions-reducers/ui-player-augmentation-mouse-move';
import { actionCreator as mouseUpOnAugmentation } from '~/actions-reducers/ui-player-augmentation-mouse-up';

const mapStateToProps = (state: State): ValueProps => ({
  tagIDs: getCurrentlyVisibleTagIDs(state)
});

const mapDispatchToProps = (dispatch: Dispatch): FuncProps => ({
  onMouseDown: (): void => {
    dispatch(mouseDownOnAugmentation());
  },
  onMouseMove: (x: number, y: number): void => {
    dispatch(mouseMoveOnAugmentation({ x, y }));
  },
  onMouseUp: (x: number, y: number): void => {
    dispatch(mouseUpOnAugmentation({ x, y }));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Augmentation);
