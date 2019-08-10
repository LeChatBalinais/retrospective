import { connect } from 'react-redux';
import Player, {
  ValueProps as PlayerValueProps,
  FuncProps as PlayerFuncProps
} from '../components/Player';
import fetchVideoTagsAsync from '../actions/asyncActionCreators/fetch-video-tags';
import { State } from '../types/state';
import { getCurrentTagID, isPlaceNewTagModeOn } from '../selectors/selectors';
import { ThunkDispatch } from '../types/types';

const mapStateToProps = (state: State): PlayerValueProps => ({
  currentTag: getCurrentTagID(state),
  placeNewTagMode: isPlaceNewTagModeOn(state)
});

const mapDispatchToProps = (dispatch: ThunkDispatch): PlayerFuncProps => ({
  onComponentDidMount: (): void => {
    dispatch(fetchVideoTagsAsync('hello'));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
