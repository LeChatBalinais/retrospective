import { Dispatch } from 'react';
import { connect } from 'react-redux';
import NewTagLayer, { FuncProps } from '../components/NewTagLayer';
import { Action } from '../types';
import newTagLayerClicked from '~/actions/ui/player/new-tag-layer/new-tag-layer-clicked';

const mapDispatchToProps = (dispatch: Dispatch<Action>): FuncProps => ({
  onClick: (x: number, y: number): void => {
    dispatch(newTagLayerClicked({ x, y }));
  }
});

export default connect(
  undefined,
  mapDispatchToProps
)(NewTagLayer);
