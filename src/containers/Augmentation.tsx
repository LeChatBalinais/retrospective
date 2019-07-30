import { Dispatch } from 'react';
import { connect } from 'react-redux';
import {
  ValueProps,
  FuncProps,
  Augmentation
} from '../components/Augmentation';
import { State } from '../types/state';
import {
  setCurrentTag,
  updateTagPath,
  setDraggedTag,
  actionCombination
} from '../actions/actionCreators';
import getVisibleTagIDs from '../selectors/get-visible-tag-ids';
import { Action } from '../types/action';

const mapStateToProps = (state: State): ValueProps => ({
  tagIDs: getVisibleTagIDs(state)
});

const mapDispatchToProps = (dispatch: Dispatch<Action>): FuncProps => ({
  onMouseDown: (): void => {
    dispatch(setCurrentTag(undefined));
  },
  onMouseMove: (x: number, y: number): void => {
    dispatch(updateTagPath(x, y));
  },
  onMouseUp: (x: number, y: number): void => {
    dispatch(
      actionCombination([updateTagPath(x, y), setDraggedTag(undefined)])
    );
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Augmentation);
