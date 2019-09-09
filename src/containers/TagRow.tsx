import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import TagRow, { ValueProps, FuncProps } from '../components/TagRow';
import { makeIsTagLocal } from '../selectors/tag-selectors';
import { isTagCurrent } from '../selectors/selectors';
import { State } from '../types';
import { tagRowClicked } from '~/actions/tag-list';

type MapStateToProps = (state: State, { ID }: Props) => ValueProps;

type MapDispatchToProps = (
  dispatch: Dispatch,
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
  return (dispatch: Dispatch, { ID }: Props): FuncProps => ({
    onClick: (): void => {
      dispatch(tagRowClicked({ tagID: ID }));
    }
  });
};

export default connect(
  makeMapStateToProps,
  makeMapDispatchToProps
)(TagRow);
