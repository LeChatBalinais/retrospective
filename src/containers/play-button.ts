import { connect } from 'react-redux';
import { Dispatch } from '~/utils/experimental/dispatch';
import Button, { ValueProps, FuncProps } from '~/components/Button';
import { State } from '~/state';
import { actionCreator as uiPlayButtonClicked } from '~/actions-reducers/ui-player-controls-play-button-clicked';
import { isPlaying } from '~/getters/player';

const mapStateToProps = (state: State): ValueProps => ({
  caption: isPlaying(state) ? 'Pause' : 'Play'
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
