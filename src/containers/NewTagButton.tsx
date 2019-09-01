import { connect } from 'react-redux';
import Button, { ValueProps, FuncProps } from '../components/Button';
import togglePlaceNewTagMode from '../thunks/toggle-place-new-tag-mode';
import { isPlaceNewTagModeOn } from '../selectors/selectors';
import { State, ThunkDispatch } from '../types';

const mapStateToProps = (state: State): ValueProps => ({
  caption: isPlaceNewTagModeOn(state) ? 'X' : 'Place New Tag'
});

const mapDispatchToProps = (dispatch: ThunkDispatch): FuncProps => ({
  onPress: (): void => {
    dispatch(togglePlaceNewTagMode());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);
