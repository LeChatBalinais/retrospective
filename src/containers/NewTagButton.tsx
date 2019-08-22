import { connect } from 'react-redux';
import Button, { ValueProps, FuncProps } from '../components/Button';
import togglePlaceNewTagMode from '../thunks/toggle-place-new-tag-mode';
import { State } from '../types/state';
import { isPlaceNewTagModeOn } from '../selectors/selectors';
import { ThunkDispatch } from '../types/types';

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
