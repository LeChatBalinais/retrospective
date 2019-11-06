import { connect } from 'react-redux';
import { Dispatch } from '~/utils/experimental/dispatch';
import NewTagLayer, { FuncProps } from '~/components/NewTagLayer';
import { actionCreator as newTagLayerClicked } from '~/actions-reducers/ui-tag-editor-new-tag-layer-clicked';

const mapDispatchToProps = (dispatch: Dispatch): FuncProps => ({
  onClick: (x: number, y: number): void => {
    dispatch(newTagLayerClicked({ x, y }));
  }
});

export default connect(
  undefined,
  mapDispatchToProps
)(NewTagLayer);
