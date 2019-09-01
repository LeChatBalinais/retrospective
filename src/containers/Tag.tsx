import { connect } from 'react-redux';
import Tag, {
  FuncProps as TagFuncProps,
  ValueProps as TagValueProps
} from '../components/Tag';
import setPlayback from '../actions/set-playback';
import makeGetTagInfo from '../selectors/get-tag-info';
import isVideoPlaying from '../selectors/is-video-playing';
import {
  makeGetTagAppearsAt,
  makeGetCurrentTagPosition
} from '../selectors/tag-selectors';
import { getCurrentTime, isTagCurrent } from '../selectors/selectors';
import {
  State,
  ThunkDispatch,
  SetPlaybackPayload,
  SetDraggedTagPayload,
  SetCurrentTagPayload
} from '../types';

import connectAction, {
  mapStateToActionCreator
} from '../utils/map-state-to-action';
import setDraggedTag from '../actions/set-dragged-tag';
import setCurrentTag from '../actions/set-current-tag';

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
  dispatch: ThunkDispatch,
  { ID }: Props
): TagFuncProps => ({
  onMouseDown: (): void => {
    dispatch(
      connectAction<SetDraggedTagPayload>([
        mapStateToActionCreator(
          setDraggedTag,
          (
            state: State,
            { ID: IDToSetBeingEdited }: SetDraggedTagPayload
          ): SetDraggedTagPayload => {
            if (isTagCurrent(state, IDToSetBeingEdited))
              return {
                ID
              };

            return undefined;
          }
        ),
        mapStateToActionCreator(
          setPlayback,
          (
            state: State,
            { ID: IDToSetBeingEdited }: SetDraggedTagPayload
          ): SetPlaybackPayload => {
            if (isTagCurrent(state, IDToSetBeingEdited))
              return {
                playback: true
              };

            return undefined;
          }
        ),
        mapStateToActionCreator(
          setCurrentTag,
          (
            state: State,
            { ID: IDToSetBeingEdited }: SetDraggedTagPayload
          ): SetCurrentTagPayload => {
            if (!isTagCurrent(state, IDToSetBeingEdited))
              return {
                ID: IDToSetBeingEdited
              };

            return undefined;
          }
        )
      ])({ ID })
    );
  },
  onMouseUp: (): void => {
    dispatch(setPlayback({ playback: false }));
  }
});

export default connect(
  makeMapStateToProps,
  mapDispatchToProps
)(Tag);
