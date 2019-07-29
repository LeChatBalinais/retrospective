import { Dispatch } from 'react';
import { connect } from 'react-redux';
import {
  ValueProps as PlayerValueProps,
  FuncProps as PlayerFuncProps,
  Player
} from '../components/Player';
import fetchVideoTagsAsync from '../actions/asyncActionCreators/fetch-video-tags';
import { State } from '../types/state';
import { AnyAction } from '../types/action';
import { getCurrentTagID, isPlaceNewTagModeOn } from '../selectors/selectors';

const mapStateToProps = (state: State): PlayerValueProps => ({
  currentTag: getCurrentTagID(state),
  placeNewTagMode: isPlaceNewTagModeOn(state)
});

const mapDispatchToProps = (
  dispatch: Dispatch<AnyAction>
): PlayerFuncProps => ({
  onComponentDidMount: (): void => {
    dispatch(fetchVideoTagsAsync('hello'));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
