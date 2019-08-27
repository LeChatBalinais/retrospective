import { connect } from 'react-redux';
import Augmentation, {
  ValueProps,
  FuncProps
} from '../components/Augmentation';
import { State } from '../types/state';
import updateTagBeingEditedPath, {
  createUpdateTagBeingEditedPath
} from '../thunks/update-tag-being-edited-path';
import connectAction from '../utils/map-state-to-action';

import getVisibleTagIDs from '../selectors/get-visible-tag-ids';
import { ThunkDispatch, Action } from '../types/types';
import setDraggedTag from '../actions/set-dragged-tag';
import setCurrentTag from '../actions/set-current-tag';

const mapStateToProps = (state: State): ValueProps => ({
  tagIDs: getVisibleTagIDs(state)
});

const mapDispatchToProps = (dispatch: ThunkDispatch): FuncProps => ({
  onMouseDown: (): void => {
    dispatch(setCurrentTag({ ID: undefined }));
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
