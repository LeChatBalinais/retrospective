import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import Player, {
  ValueProps as PlayerValueProps,
  FuncProps as PlayerFuncProps
} from '../components/Player';
import { getCurrentTagID, isPlaceNewTagModeOn } from '../selectors/selectors';
import { State } from '../types';
import { actionCreator as playerLoaded } from '~/actions-reducers/ui-player-loaded';

const mapStateToProps = (state: State): PlayerValueProps => ({
  currentTag: getCurrentTagID(state),
  placeNewTagMode: isPlaceNewTagModeOn(state)
});

const mapDispatchToProps = (dispatch: Dispatch): PlayerFuncProps => ({
  onComponentDidMount: (): void => {
    dispatch(playerLoaded());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
