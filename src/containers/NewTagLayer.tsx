import { Dispatch } from 'react';
import { connect } from 'react-redux';
import {
  addNewTag,
  setPlaceNewTagMode,
  setPlayback
} from '../actions/actionCreators';
import { FuncProps, NewTagLayer } from '../components/NewTagLayer';
import { Action } from '../types/action';

const mapDispatchToProps = (dispatch: Dispatch<Action>): FuncProps => ({
  onClick: (x: number, y: number): void => {
    dispatch(setPlayback(false));
    dispatch(setPlaceNewTagMode(false));
    dispatch(addNewTag(x, y));
  }
});

export default connect(
  undefined,
  mapDispatchToProps
)(NewTagLayer);
