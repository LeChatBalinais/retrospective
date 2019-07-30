import { Dispatch } from 'react';
import { connect } from 'react-redux';
import {
  addNewTag,
  setPlaceNewTagMode,
  setPlayback,
  actionCombination
} from '../actions/actionCreators';
import { FuncProps, NewTagLayer } from '../components/NewTagLayer';
import { Action } from '../types/action';

const mapDispatchToProps = (dispatch: Dispatch<Action>): FuncProps => ({
  onClick: (x: number, y: number): void => {
    dispatch(
      actionCombination([
        setPlayback(false),
        setPlaceNewTagMode(false),
        addNewTag(x, y)
      ])
    );
  }
});

export default connect(
  undefined,
  mapDispatchToProps
)(NewTagLayer);
