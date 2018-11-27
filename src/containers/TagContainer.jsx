// @flow
import React from 'react';
import { connect } from 'react-redux';
import Tag from '../components/Tag';
import store from '../store';
import { setPlayback, setTagDragged, updateTagPath } from '../actionCreators';

type Props = {
  tagID: number,
  x: number,
  y: number,
  dragged: boolean,
  playback: boolean
};

const TagContainer = ({ x, y, playback, dragged, tagID }: Props) => (
  <Tag
    {...{
      className: 'Tag',
      x,
      y,
      dragged,
      playback,
      onDragBegin: (xCoor: number, yCoor: number) => {
        store.dispatch(setTagDragged(tagID, true));
        store.dispatch(updateTagPath(tagID, xCoor, yCoor));
        store.dispatch(setPlayback(true));
      },
      onDrag: (xCoor: number, yCoor: number) => {
        store.dispatch(updateTagPath(tagID, xCoor, yCoor));
      },
      onDragEnd: (xCoor: number, yCoor: number) => {
        store.dispatch(setPlayback(false));
        store.dispatch(updateTagPath(tagID, xCoor, yCoor));
        store.dispatch(setTagDragged(tagID, false));
      }
    }}
  />
);

const mapStateToProps = (
  { tags: { byID }, superVideoState: { playback } },
  { tagID }
) => ({
  ...byID[tagID],
  playback
});

export default connect(mapStateToProps)(TagContainer);
