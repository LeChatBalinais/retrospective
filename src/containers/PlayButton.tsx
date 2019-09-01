import { connect } from 'react-redux';
import Button, { ValueProps, FuncProps } from '../components/Button';
import togglePlayback from '../thunks/toggle-playback';
import { getPlayback } from '../selectors/selectors';
import { State, ThunkDispatch } from '../types';

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
