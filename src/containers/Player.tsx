import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import Player, {
  ValueProps as PlayerValueProps,
  FuncProps as PlayerFuncProps
} from '../components/Player';
import fetchVideoTagsAsync from '../actions/asyncActionCreators/fetch-video-tags';
import { State } from '../types/state';
import { Action } from '../types/action';
import { getCurrentTagID, isPlaceNewTagModeOn } from '../selectors/selectors';

const mapStateToProps = (state: State): PlayerValueProps => ({
  currentTag: getCurrentTagID(state),
  placeNewTagMode: isPlaceNewTagModeOn(state)
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<State, {}, Action>
): PlayerFuncProps => ({
  onComponentDidMount: (): void => {
    dispatch(fetchVideoTagsAsync('hello'));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
