import { connect } from 'react-redux';
import { Dispatch } from '~/utils/experimental/dispatch';
import TagRow, { ValueProps, FuncProps } from '~/components/TagRow';
import { State } from '~/state';
import { actionCreator as tagRowClicked } from '~/actions-reducers/ui-tag-list-row-clicked';
import { actionCreator as mouseEnterTag } from '~/actions-reducers/ui-tag-mouse-enter';
import { actionCreator as mouseOutTag } from '~/actions-reducers/ui-tag-mouse-out';
import { isTagCurrent } from '~/selectors/is-tag-current';
import { isTagLocal } from '~/selectors/is-tag-local';
import { getTagCaption } from '~/selectors/get-tag-caption';
import { isTagHighlighted } from '~/getters/player';

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

export const getClassName = (state: State, ID: string): string => {
  let className = 'box';

  if (isTagCurrent(state, ID)) className = className.concat(' current-tag-row');

  if (isTagHighlighted(state, ID))
    className = className.concat(' hovered-tag-row');

  return className;
};

const makeMapStateToProps = (): MapStateToProps => (
  state: State,
  { ID }: Props
): ValueProps => ({
  ID,
  caption: getTagCaption(state, ID),
  isSaveButtonAvailable: isSaveButtonAvailable(state, ID),
  className: getClassName(state, ID)
});

const makeMapDispatchToProps = (): MapDispatchToProps => (
  dispatch: Dispatch,
  { ID }: Props
): FuncProps => ({
  onClick: (): void => {
    dispatch(tagRowClicked({ tagID: ID }));
  },
  onMouseEnter: (): void => {
    dispatch(mouseEnterTag({ tagID: ID }));
  },
  onMouseLeave: (): void => {
    dispatch(mouseOutTag({ tagID: ID }));
  }
});

export default connect(
  makeMapStateToProps,
  makeMapDispatchToProps
)(TagRow);
