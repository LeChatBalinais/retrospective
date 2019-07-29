import { Dispatch } from 'react';
import { connect } from 'react-redux';
import { ValueProps, FuncProps, Button } from '../components/Button';
import { setPlayback } from '../actions/actionCreators';
import { State } from '../types/state';
import { getPlayback } from '../selectors/selectors';
import { Action } from '../types/action';

const mapStateToProps = (state: State): ValueProps => ({
  caption: getPlayback(state) ? 'Pause' : 'Play'
});

const mapDispatchToProps = (dispatch: Dispatch<Action>): FuncProps => ({
  onPress: (): void => {
    dispatch(setPlayback());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);
