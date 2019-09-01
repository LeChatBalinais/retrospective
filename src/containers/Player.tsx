import { connect } from 'react-redux';
import Player, {
  ValueProps as PlayerValueProps,
  FuncProps as PlayerFuncProps
} from '../components/Player';
import { getCurrentTagID, isPlaceNewTagModeOn } from '../selectors/selectors';
import { State, ThunkDispatch } from '../types';
import fetchTags from '../actions/fetch-tags';

const mapStateToProps = (state: State): PlayerValueProps => ({
  currentTag: getCurrentTagID(state),
  placeNewTagMode: isPlaceNewTagModeOn(state)
});

const mapDispatchToProps = (dispatch: ThunkDispatch): PlayerFuncProps => ({
  onComponentDidMount: (): void => {
    dispatch(fetchTags());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
