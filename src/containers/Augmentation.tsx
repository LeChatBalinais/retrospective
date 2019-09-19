import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import Augmentation, {
  ValueProps,
  FuncProps
} from '../components/Augmentation';
import getVisibleTagIDs from '../selectors/get-visible-tag-ids';
import { State } from '../types';
import mouseDownOnAugmentation from '~/actions/ui/player/augmentation/mouse-down-on-augmentation';
import mouseUpOnAugmentation from '~/actions/ui/player/augmentation/mouse-up-on-augmentation';
import mouseMoveOnAugmentation from '~/actions/ui/player/augmentation/mouse-move-on-augmentation';

const mapStateToProps = (state: State): ValueProps => ({
  tagIDs: getVisibleTagIDs(state)
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
