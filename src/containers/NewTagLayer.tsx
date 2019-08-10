import { Dispatch } from 'react';
import { connect } from 'react-redux';
import setPlayback from '../actions/set-playback';
import setPlaceNewTagMode from '../actions/set-place-new-tag-mode';
import NewTagLayer, { FuncProps } from '../components/NewTagLayer';
import { Action } from '../types/types';
import addNewTag from '../actions/add-new-tag';
import actionCombination from '../actions/action-combination';

const mapDispatchToProps = (dispatch: Dispatch<Action>): FuncProps => ({
  onClick: (x: number, y: number): void => {
    dispatch(
      actionCombination([
        setPlayback({ playback: false }),
        setPlaceNewTagMode({ mode: false }),
        addNewTag({ x, y })
      ])
    );
  }
});

export default connect(
  undefined,
  mapDispatchToProps
)(NewTagLayer);
