import { connect } from 'react-redux';
import Button, { ValueProps, FuncProps } from '../components/Button';
import togglePlayback from '../thunks/toggle-playback';
import { State, ThunkDispatch } from '../types';
import { isVideoPlaying } from '~/selectors/selectors';

const mapStateToProps = (state: State): ValueProps => ({
  caption: isVideoPlaying(state) ? 'Pause' : 'Play'
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
