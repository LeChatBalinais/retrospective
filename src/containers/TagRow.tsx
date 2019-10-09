import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import TagRow, { ValueProps, FuncProps } from '~/components/TagRow';
import { State } from '~/state';
import { actionCreator as tagRowClicked } from '~/actions-reducers/ui-tag-list-row-clicked';
import { isTagCurrent } from '~/selectors/is-tag-current';
import { isTagLocal } from '~/selectors/is-tag-local';

type MapStateToProps = (state: State, { ID }: Props) => ValueProps;

type MapDispatchToProps = (
  dispatch: Dispatch,
  { ID }: { ID: string }
) => FuncProps;

interface Props {
  ID: string;
}
export const isTagRowHighlighted = (state: State, ID: string): boolean =>
  isTagCurrent(state, ID);

export const isSaveButtonAvailable = (state: State, ID: string): boolean =>
  isTagLocal(state, ID);

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
