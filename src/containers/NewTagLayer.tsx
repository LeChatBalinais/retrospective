import { Dispatch } from 'react';
import { v4 as uuid } from 'uuid';
import { connect } from 'react-redux';
import setPlayback from '../actions/set-playback';
import setPlaceNewTagMode from '../actions/set-place-new-tag-mode';
import NewTagLayer, { FuncProps } from '../components/NewTagLayer';
import {
  Action,
  SetPlaybackPayload,
  SetPlaceNewTagModePayload,
  AddNewTagPayload
} from '../types';
import addNewTag from '../actions/add-new-tag';
import actionCombination from '../utils/action-combination';

const mapDispatchToProps = (dispatch: Dispatch<Action>): FuncProps => ({
  onClick: (x: number, y: number): void => {
    dispatch(
      actionCombination<
        SetPlaybackPayload & SetPlaceNewTagModePayload & AddNewTagPayload
      >([setPlayback, setPlaceNewTagMode, addNewTag])({
        ID: uuid(),
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
