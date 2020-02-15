import { connect } from 'react-redux';
import { Dispatch } from '~/utils/dispatch';
import Button, { ValueProps, FuncProps } from '~/components/Button';
import { State } from '~/state';
import { actionCreator as saveTagButtonClicked } from '~/actions-reducers/ui-tag-list-row-save-button-clicked';
import { actionCreator as deleteTagButtonClicked } from '~/actions-reducers/ui-tag-list-row-delete-button-clicked';

interface Props {
  ID: string;
  isLocal: boolean;
}

type MapDispatchToProps = (dispatch: Dispatch, props: Props) => FuncProps;

const onPress = (
  dispatch: Dispatch,
  tagID: string,
  isLocal: boolean
): (() => void) => {
  if (isLocal)
    return (): void => {
      dispatch(saveTagButtonClicked({ tagID }));
    };

  return (): void => {
    dispatch(deleteTagButtonClicked({ tagID }));
  };
};

const makeMapDispatchToProps = (): MapDispatchToProps => {
  return (
    dispatch: Dispatch,
    { ID, isLocal }: Props
  ): { onPress: () => void } => ({ onPress: onPress(dispatch, ID, isLocal) });
};

const mapStateToProps = (state: State, { isLocal }: Props): ValueProps => {
  return { caption: isLocal ? 'Save' : 'Delete' };
};

export default connect(mapStateToProps, makeMapDispatchToProps)(Button);
