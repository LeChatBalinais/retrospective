import { connect } from 'react-redux';
import Button, { ValueProps, FuncProps } from '../components/Button';
import {
  State,
  ThunkDispatch,
  deleteTagButtonClicked,
  saveTagButtonClicked
} from '../types';

interface Props {
  ID: string;
  isLocal: boolean;
}

type MapDispatchToProps = (dispatch: ThunkDispatch, props: Props) => FuncProps;

const onPress = (
  dispatch: ThunkDispatch,
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
    dispatch: ThunkDispatch,
    { ID, isLocal }: { ID: string; isLocal: boolean }
  ): { onPress: () => void } => ({ onPress: onPress(dispatch, ID, isLocal) });
};

const mapStateToProps = (
  state: State,
  { isLocal }: { isLocal: boolean }
): ValueProps => {
  return { caption: isLocal ? 'Save' : 'Delete' };
};

export default connect(
  mapStateToProps,
  makeMapDispatchToProps
)(Button);
