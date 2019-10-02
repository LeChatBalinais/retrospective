import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Button, { ValueProps, FuncProps } from '../components/Button';
import { State } from '../types/state';
import { actionCreator as uiPlayButtonClicked } from '~/actions-reducers/ui-player-play-button-clicked';
import { isVideoPlaying } from '~/selectors/selectors';

const mapStateToProps = (state: State): ValueProps => ({
  caption: isVideoPlaying(state) ? 'Pause' : 'Play'
});

const mapDispatchToProps = (dispatch: Dispatch): FuncProps => ({
  onPress: (): void => {
    dispatch(uiPlayButtonClicked());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);
