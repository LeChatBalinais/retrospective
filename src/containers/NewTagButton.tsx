import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import Button, { ValueProps, FuncProps } from '../components/Button';
import { isPlaceNewTagModeOn } from '../selectors/selectors';
import { State, newTagButtonClicked } from '../types';

const mapStateToProps = (state: State): ValueProps => ({
  caption: isPlaceNewTagModeOn(state) ? 'X' : 'Place New Tag'
});

const mapDispatchToProps = (dispatch: Dispatch): FuncProps => ({
  onPress: (): void => {
    dispatch(newTagButtonClicked());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);
