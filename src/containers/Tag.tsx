import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import Tag, {
  FuncProps as TagFuncProps,
  ValueProps as TagValueProps
} from '../components/Tag';
import makeGetTagInfo from '../selectors/get-tag-info';
import isVideoPlaying from '../selectors/is-video-playing';
import {
  makeGetTagAppearsAt,
  makeGetCurrentTagPosition
} from '../selectors/tag-selectors';
import { getCurrentTime } from '../selectors/selectors';
import { State } from '../types';

import mouseDownOnTag from '~/actions/ui/player/augmentation/tag/mouse-down-on-tag';
import mouseUpOnTag from '~/actions/ui/player/augmentation/tag/mouse-up-on-tag';

interface Props {
  ID: string;
}

type MapStateToProps = (state: State, props: Props) => TagValueProps;

const makeMapStateToProps = (): MapStateToProps => {
  const getTagInfo = makeGetTagInfo();
  const getTagAppearsAt = makeGetTagAppearsAt();
  const getCurrentTagPosition = makeGetCurrentTagPosition();

  return (state: State, { ID }: Props): TagValueProps => {
    const { path, isEdited: dragged, isCurrent } = getTagInfo(state, ID);
    const { time, x, y } = getTagAppearsAt(state, ID);
    const { x: offsetX, y: offsetY } = getCurrentTagPosition(state, ID);
    const currentTime = getCurrentTime(state) - time;
    const playback = isVideoPlaying(state);

    return {
      className: 'Tag',
      path,
      x,
      y,
      dragged,
      currentTime,
      playback,
      offsetX,
      offsetY,
      isCurrent
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
