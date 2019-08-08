import { connect } from 'react-redux';
import Augmentation, {
  ValueProps,
  FuncProps
} from '../components/Augmentation';
import { State } from '../types/state';
import { setCurrentTag, setDraggedTag } from '../actions/actionCreators';
import updateTagBeingEditedPath, {
  createUpdateTagBeingEditedPath
} from '../actions/containers/update-tag-being-edited-path';
import connectAction from '../actions/prepared-action';

import getVisibleTagIDs from '../selectors/get-visible-tag-ids';
import { ThunkDispatch, Action } from '../types/action';

const mapStateToProps = (state: State): ValueProps => ({
  tagIDs: getVisibleTagIDs(state)
});

const mapDispatchToProps = (dispatch: ThunkDispatch): FuncProps => ({
  onMouseDown: (): void => {
    dispatch(setCurrentTag(undefined));
  },
  onMouseMove: (x: number, y: number): void => {
    dispatch(updateTagBeingEditedPath({ x, y }));
  },
  onMouseUp: (x: number, y: number): void => {
    dispatch(
      connectAction([
        createUpdateTagBeingEditedPath,
        (): Action => setDraggedTag({ ID: undefined })
      ])({ x, y })
    );
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Augmentation);
