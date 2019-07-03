import React from 'react';
import { connect } from 'react-redux';
import Tag from '../components/Tag';
import TagState from '../types/tag';
import store from '../store';
import { setCurrentTag } from '../actionCreators';
import { State } from '../types/state';

interface Props {
  tag?: TagState;
  tagDragged?: boolean;
  duration?: number;
  currentTime?: number;
  playback?: boolean;
  tagID: string;
  offsetX?: number;
  offsetY?: number;
}

const TagContainer = ({
  tag,
  tagDragged,
  duration,
  currentTime,
  playback,
  tagID,
  offsetX,
  offsetY
}: Props): JSX.Element => (
  <Tag
    {...{
      ...tag,
      className: 'Tag',
      duration,
      currentTime,
      dragged: tagDragged,
      playback,
      offsetX,
      offsetY,
      onMouseDown: (): void => {
        console.log('hello');
        store.dispatch(setCurrentTag(tagID));
      }
    }}
  />
);

const mapStateToProps = (
  {
    tags: { byID },
    superVideoState: { playback, currentTime, userSeek },
    draggedTags
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
    tagDragged: draggedTags.includes(tagID),
    tagID,
    duration,
    currentTime: currentTime - path[0].time,
    playback: playback && !userSeek,
    offsetX,
    offsetY
  };
};

export default connect(mapStateToProps)(TagContainer);
