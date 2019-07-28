import { Dispatch } from 'react';
import { connect } from 'react-redux';
import { ValueProps, FuncProps, Button } from '../components/Button';
import saveTagAsync from '../actions/asyncActionCreators/save-tag';
import deleteTagAsync from '../actions/asyncActionCreators/delete-tag';
import { AnyAction } from '../types/action';
import { State } from '../types/state';

interface Props {
  ID: string;
  isLocal: boolean;
}

type MapDispatchToProps = (
  dispatch: Dispatch<AnyAction>,
  props: Props
) => FuncProps;

const onPress = (
  dispatch: Dispatch<AnyAction>,
  tagID: string,
  isLocal: boolean
): (() => void) => {
  if (isLocal)
    return (): void => {
      dispatch(saveTagAsync(tagID));
    };

  return (): void => {
    dispatch(deleteTagAsync(tagID));
  };
};

const makeMapDispatchToProps = (): MapDispatchToProps => {
  return (
    dispatch: Dispatch<AnyAction>,
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
