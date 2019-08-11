import { Dispatch } from 'react';
import { connect } from 'react-redux';
import setPlayback, { SetPlaybackPayload } from '../actions/set-playback';
import setPlaceNewTagMode, {
  SetPlaceNewTagModePayload
} from '../actions/set-place-new-tag-mode';
import NewTagLayer, { FuncProps } from '../components/NewTagLayer';
import { Action } from '../types/types';
import addNewTag, { AddNewTagPayload } from '../actions/add-new-tag';
import actionCombination from '../actions/utils/action-combination';

const mapDispatchToProps = (dispatch: Dispatch<Action>): FuncProps => ({
  onClick: (x: number, y: number): void => {
    dispatch(
      actionCombination<
        SetPlaybackPayload & SetPlaceNewTagModePayload & AddNewTagPayload
      >([setPlayback, setPlaceNewTagMode, addNewTag])({
        playback: false,
        mode: false,
        x,
        y
      })
    );
  }
});

export default connect(
  undefined,
  mapDispatchToProps
)(NewTagLayer);
