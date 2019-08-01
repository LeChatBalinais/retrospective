import { connect } from 'react-redux';
import { Dispatch } from 'react';
import TagRow, { ValueProps, FuncProps } from '../components/TagRow';
import { State } from '../types/state';
import {
  setCurrentTag,
  seekToTag,
  setUserSeek,
  actionCombination
} from '../actions/actionCreators';
import { makeIsTagLocal } from '../selectors/tag-selectors';
import { isTagCurrent } from '../selectors/selectors';
import { Action } from '../types/action';

type MapStateToProps = (state: State, { ID }: Props) => ValueProps;

type MapDispatchToProps = (
  dispatch: Dispatch<Action>,
  { ID }: { ID: string }
) => FuncProps;

interface Props {
  ID: string;
}

const makeMapStateToProps = (): MapStateToProps => {
  const isTagLocal = makeIsTagLocal();

  return (state: State, { ID }: Props): ValueProps => {
    return {
      ID,
      isLocal: isTagLocal(state, ID),
      isCurrent: isTagCurrent(state, ID)
    };
  };
};

const makeMapDispatchToProps = (): MapDispatchToProps => {
  return (dispatch: Dispatch<Action>, { ID }: Props): FuncProps => ({
    onMouseDown: (): void => {
      dispatch(
        actionCombination([setCurrentTag(ID), setUserSeek(true), seekToTag(ID)])
      );
      setTimeout((): void => {
        dispatch(setUserSeek(false));
      }, 100);
    }
  });
};

export default connect(
  makeMapStateToProps,
  makeMapDispatchToProps
)(TagRow);
