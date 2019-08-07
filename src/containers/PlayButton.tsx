import { connect } from 'react-redux';
import Button, { ValueProps, FuncProps } from '../components/Button';
import togglePlayback from '../actions/actionCreatorContainers/toggle-playback';
import { State } from '../types/state';
import { getPlayback } from '../selectors/selectors';
import { ThunkDispatch } from '../types/action';

const mapStateToProps = (state: State): ValueProps => ({
  caption: getPlayback(state) ? 'Pause' : 'Play'
});

const mapDispatchToProps = (dispatch: ThunkDispatch): FuncProps => ({
  onPress: (): void => {
    dispatch(togglePlayback());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);
