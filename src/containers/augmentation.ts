import { connect } from 'react-redux';
import { Dispatch } from '~/utils/dispatch';
import Augmentation, { ValueProps, FuncProps } from '~/components/Augmentation';
import getCurrentlyVisibleTagIDs from '~/selectors/get-currentily-visible-tag-ids';
import { State } from '~/state';
import { actionCreator as mouseDownOnAugmentation } from '~/actions-reducers/ui-player-augmentation-mouse-down';
import { actionCreator as mouseMoveOnAugmentation } from '~/actions-reducers/ui-player-augmentation-mouse-move';
import { actionCreator as mouseUpOnAugmentation } from '~/actions-reducers/ui-player-augmentation-mouse-up';
import { getTagBeingEditedID } from '~/getters/tag-editor';

const mapStateToProps = (state: State): ValueProps => ({
  tagIDs: getCurrentlyVisibleTagIDs(state),
  reactOnMouseMove: getTagBeingEditedID(state) !== undefined
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
