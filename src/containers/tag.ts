import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import Tag, {
  FuncProps as TagFuncProps,
  ValueProps as TagValueProps
} from '~/components/Tag';
import { State } from '~/state';
import { actionCreator as mouseDownOnTag } from '~/actions-reducers/ui-player-augmentation-tag-mouse-down';
import { actionCreator as mouseUpOnTag } from '~/actions-reducers/ui-player-augmentation-tag-mouse-up';
import { actionCreator as mouseEnterTag } from '~/actions-reducers/ui-tag-mouse-enter';
import { actionCreator as mouseOutTag } from '~/actions-reducers/ui-tag-mouse-out';
import { isPlaying, isTagHighlighted } from '~/getters/player';
import { isTagDragged } from '~/selectors/is-tag-dragged';
import { isTagCurrent } from '~/selectors/is-tag-current';
import { getPointTagAppearsAt } from '~/selectors/get-point-tag-appears-at';
import { getTagPositionByTime } from '~/selectors/get-tag-position-by-time';
import { getTagPath } from '~/getters/tags';
import { getTimePlayerAt } from '~/selectors/get-time-player-at';

interface Props {
  ID: string;
}

type MapStateToProps = (state: State, props: Props) => TagValueProps;

const isAnimated = (state: State, ID: string): boolean => {
  return isPlaying(state) && !isTagDragged(state, ID);
};

const getTimeTagAt = (state: State, ID: string): number => {
  const { time } = getPointTagAppearsAt(state, ID);
  const a = getTimePlayerAt(state);
  return a - time;
};

const getPosition = (state: State, ID: string): { x: number; y: number } => {
  return isAnimated(state, ID)
    ? getPointTagAppearsAt(state, ID)
    : getTagPositionByTime(state, ID, getTimePlayerAt(state));
};

const getClassName = (state: State, ID: string): string => {
  let result = 'Tag marker ';
  if (isTagCurrent(state, ID)) result += 'selected ';
  if (isTagHighlighted(state, ID)) result += 'highlighted';
  return result;
};

const makeMapStateToProps = (): MapStateToProps => {
  return (state: State, { ID }: Props): TagValueProps => {
    return {
      className: getClassName(state, ID),
      position: getPosition(state, ID),
      path: getTagPath(state, ID),
      timeAt: getTimeTagAt(state, ID),
      isAnimated: isAnimated(state, ID)
    };
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch,
  { ID }: Props
): TagFuncProps => ({
  onMouseDown: (): void => {
    dispatch(mouseDownOnTag({ tagID: ID }));
  },
  onMouseUp: (): void => {
    dispatch(mouseUpOnTag());
  },
  onMouseEnter: (): void => {
    dispatch(mouseEnterTag({ tagID: ID }));
  },
  onMouseOut: (): void => {
    dispatch(mouseOutTag({ tagID: ID }));
  }
});

export default connect(
  makeMapStateToProps,
  mapDispatchToProps
)(Tag);
