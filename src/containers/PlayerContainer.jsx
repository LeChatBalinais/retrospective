// @flow
import React from 'react';
import { connect } from 'react-redux';
import store from '../store';
import Player from '../components/Player';
import { setPlaceNewTagMode } from '../actionCreators';

type Props = {
  playback: boolean,
  placeNewTagMode: boolean,
  currentTime: number,
  onTagAdded: void => void
};

const PlayerContainer = ({
  playback,
  currentTime,
  placeNewTagMode,
  onTagAdded
}: Props) => (
  <Player {...{ playback, currentTime, placeNewTagMode, onTagAdded }} />
);

const mapStateToProps = ({
  superVideoState: { playback, currentTime },
  editorState: { placeNewTagMode }
}) => ({
  playback,
  currentTime,
  placeNewTagMode,
  onTagAdded: () => {
    store.dispatch(setPlaceNewTagMode(false));
  }
});

export default connect(mapStateToProps)(PlayerContainer);
