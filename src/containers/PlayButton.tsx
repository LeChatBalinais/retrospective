import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Button, { ValueProps, FuncProps } from '../components/Button';
import { State, playButtonClicked } from '../types';
import { isVideoPlaying } from '~/selectors/selectors';

const mapStateToProps = (state: State): ValueProps => ({
  caption: isVideoPlaying(state) ? 'Pause' : 'Play'
});

const mapDispatchToProps = (dispatch: Dispatch): FuncProps => ({
  onPress: (): void => {
    dispatch(playButtonClicked());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);
