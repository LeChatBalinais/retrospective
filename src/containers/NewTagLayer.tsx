import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import NewTagLayer, { FuncProps } from '~/components/NewTagLayer';
import { actionCreator as newTagLayerClicked } from '~/actions-reducers/ui-player-new-tag-layer-clicked';

const mapDispatchToProps = (dispatch: Dispatch): FuncProps => ({
  onClick: (x: number, y: number): void => {
    dispatch(newTagLayerClicked({ x, y }));
  }
});

export default connect(
  undefined,
  mapDispatchToProps
)(NewTagLayer);
