import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import TagRow, { ValueProps, FuncProps } from '../components/TagRow';
import {
  isSaveButtonAvailable,
  isTagRowHighlighted
} from '../selectors/ui/tag-list/tag-row';
import { State } from '../types';
import { tagRowClicked } from '~/actions/ui/tag-list';

type MapStateToProps = (state: State, { ID }: Props) => ValueProps;

type MapDispatchToProps = (
  dispatch: Dispatch,
  { ID }: { ID: string }
) => FuncProps;

interface Props {
  ID: string;
}

const makeMapStateToProps = (): MapStateToProps => (
  state: State,
  { ID }: Props
): ValueProps => ({
  ID,
  isSaveButtonAvailable: isSaveButtonAvailable(state, ID),
  isHighlighted: isTagRowHighlighted(state, ID)
});

const makeMapDispatchToProps = (): MapDispatchToProps => (
  dispatch: Dispatch,
  { ID }: Props
): FuncProps => ({
  onClick: (): void => {
    dispatch(tagRowClicked({ tagID: ID }));
  }
});

export default connect(
  makeMapStateToProps,
  makeMapDispatchToProps
)(TagRow);
