import React from 'react';
import { connect } from 'react-redux';
import TagComponent from '../components/Tag';
import TagState from '../types/tag';
import store from '../store';
import {
  setCurrentTag,
  setDraggedTag,
  setPlayback
} from '../actions/actionCreators';
import { State } from '../types/state';

interface Props {
  tag?: TagState;
  isDragged?: boolean;
  duration?: number;
  currentTime?: number;
  playback?: boolean;
  tagID: string;
  offsetX?: number;
  offsetY?: number;
  isCurrent?: boolean;
}

const Tag = ({
  tag,
  isDragged,
  duration,
  currentTime,
  playback,
  tagID,
  offsetX,
  offsetY,
  isCurrent
}: Props): JSX.Element => (
  <TagComponent
    {...{
      ...tag,
      className: 'Tag',
      duration,
      currentTime,
      dragged: isDragged,
      playback,
      offsetX,
      offsetY,
      isCurrent,
      onMouseDown: (): void => {
        if (!isCurrent) {
          store.dispatch(setCurrentTag(tagID));
          return;
        }

        store.dispatch(setDraggedTag(tagID));
        store.dispatch(setPlayback(true));
      },
      onMouseUp: (): void => {
        store.dispatch(setPlayback(false));
      }
    }}
  />
);

const mapStateToProps = (
  {
    tags: { byID },
    superVideoState: { playback, currentTime, userSeek },
    draggedTag,
    currentTag
  }: State,
  { tagID }: Props
): Props => {
  const tag = byID[tagID];

  const { path } = tag;
  let offsetX = 0;
  let offsetY = 0;

  if (currentTime < path[0].time) {
    offsetX = path[0].x;
    offsetY = path[0].y;
  } else if (currentTime > path[path.length - 1].time) {
    offsetX = path[path.length - 1].x;
    offsetY = path[path.length - 1].y;
  } else {
    for (let i = 0; i < path.length; i += 1) {
      if (path[i].time === currentTime) {
        offsetX = path[i].x;
        offsetY = path[i].y;
      } else if (
        path[i].time <= currentTime &&
        path[i + 1].time >= currentTime
      ) {
        offsetX = (path[i].x + path[i + 1].x) / 2;
        offsetY = (path[i].y + path[i + 1].y) / 2;
      }
    }
  }

  let duration = 0;

  if (path.length > 1) duration = path[path.length - 1].time - path[0].time;

  return {
    tag,
    isDragged: draggedTag === tagID,
    tagID,
    duration,
    currentTime: currentTime - path[0].time,
    playback: playback && !userSeek,
    offsetX,
    offsetY,
    isCurrent: tagID === currentTag
  };
};

export default connect(mapStateToProps)(Tag);
