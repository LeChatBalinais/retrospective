import { connect } from 'react-redux';
import { Dispatch } from '~/utils/dispatch';
import Button, { ValueProps, FuncProps } from '~/components/Button';
import { isPlaceNewTagModeOn } from '~/getters/tag-editor';
import { State } from '~/state';
import { actionCreator as newTagButtonClicked } from '~/actions-reducers/ui-tag-editor-new-tag-button-clicked';

const mapStateToProps = (state: State): ValueProps => ({
  caption: isPlaceNewTagModeOn(state) ? 'X' : 'Place New Tag'
});

const mapDispatchToProps = (dispatch: Dispatch): FuncProps => ({
  onPress: (): void => {
    dispatch(newTagButtonClicked());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);
