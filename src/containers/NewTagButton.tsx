import { Dispatch } from 'react';
import { connect } from 'react-redux';
import Button, { ValueProps, FuncProps } from '../components/Button';
import { setPlaceNewTagMode } from '../actions/actionCreators';
import { State } from '../types/state';
import { isPlaceNewTagModeOn } from '../selectors/selectors';
import { Action } from '../types/action';

const mapStateToProps = (state: State): ValueProps => ({
  caption: isPlaceNewTagModeOn(state) ? 'X' : 'Place New Tag'
});

const mapDispatchToProps = (dispatch: Dispatch<Action>): FuncProps => ({
  onPress: (): void => {
    dispatch(setPlaceNewTagMode());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);
