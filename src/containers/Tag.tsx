import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import Tag, {
  FuncProps as TagFuncProps,
  ValueProps as TagValueProps
} from '~/components/Tag';
import { State } from '~/state';
import { actionCreator as mouseDownOnTag } from '~/actions-reducers/ui-player-augmentation-tag-mouse-down';
import { actionCreator as mouseUpOnTag } from '~/actions-reducers/ui-player-augmentation-tag-mouse-up';
import { isPlaying } from '~/getters/player';
import { isTagDragged } from '~/selectors/is-tag-dragged';
import { isTagCurrent } from '~/selectors/is-tag-current';
import { getTimeVideoAt } from '~/selectors/get-time-video-at';
import { getPointTagAppearsAt } from '~/selectors/get-point-tag-appears-at';
import { getTagPositionByTime } from '~/selectors/get-tag-position-by-time';
import { getTagPath } from '~/getters/tags';

interface Props {
  ID: string;
}

type MapStateToProps = (state: State, props: Props) => TagValueProps;

const isAnimated = (state: State, ID: string): boolean => {
  return isPlaying(state) && !isTagDragged(state, ID);
};

const getTimeTagAt = (state: State, ID: string): number => {
  const { time } = getPointTagAppearsAt(state, ID);
  return getTimeVideoAt(state) - time;
};

const getPosition = (state: State, ID: string): { x: number; y: number } => {
  return isAnimated(state, ID)
    ? getPointTagAppearsAt(state, ID)
    : getTagPositionByTime(state, ID, getTimeTagAt(state, ID));
};

const makeMapStateToProps = (): MapStateToProps => {
  return (state: State, { ID }: Props): TagValueProps => {
    return {
      className: 'Tag',
      position: getPosition(state, ID),
      path: getTagPath(state, ID),
      timeAt: getTimeTagAt(state, ID),
      isCurrent: isTagCurrent(state, ID),
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
  }
});

export default connect(
  makeMapStateToProps,
  mapDispatchToProps
)(Tag);
