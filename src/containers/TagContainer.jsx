// @flow
import React from 'react';
import { connect } from 'react-redux';
import Tag from '../components/Tag';
import store from '../store';
import { setPlayback, setTagDragged, updateTagPath } from '../actionCreators';

type Props = {
  tagID: string,
  x: number,
  y: number,
  duration: number,
  path: Array<{ time: number, x: number, y: number }>,
  currentTime: number,
  dragged: boolean,
  playback: boolean,
  offsetX: number,
  offsetY: number
};

const TagContainer = ({
  x,
  y,
  duration,
  path,
  currentTime,
  playback,
  dragged,
  tagID,
  offsetX,
  offsetY
}: Props) => (
  <Tag
    {...{
      className: 'Tag',
      x,
      y,
      duration,
      path,
      currentTime,
      dragged,
      playback,
      offsetX,
      offsetY,
      onDragBegin: (xCoor: number, yCoor: number) => {
        store.dispatch(setTagDragged(tagID, true));
        console.log(xCoor, yCoor);
        // store.dispatch(updateTagPath(tagID, xCoor, yCoor));
        store.dispatch(setPlayback(true));
      },
      onDrag: (xCoor: number, yCoor: number) => {
        store.dispatch(updateTagPath(tagID, xCoor, yCoor));
      },
      onDragEnd: (xCoor: number, yCoor: number) => {
        store.dispatch(setPlayback(false));
        console.log(xCoor, yCoor);
        store.dispatch(updateTagPath(tagID, xCoor, yCoor));
        store.dispatch(setTagDragged(tagID, false));
      }
    }}
  />
);

const mapStateToProps = (
  { tags: { byID }, superVideoState: { playback, currentTime, userSeek } },
  { tagID }
) => {
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
    ...tag,
    duration,
    currentTime: currentTime - path[0].time,
    playback: playback && !userSeek,
    offsetX,
    offsetY
  };
};

export default connect(mapStateToProps)(TagContainer);
