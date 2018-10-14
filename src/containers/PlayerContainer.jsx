// @flow
import React from 'react';
import { connect } from 'react-redux';
import Player from '../components/Player';

type Props = {
  playback: boolean,
  placeNewTagMode: boolean
};

const PlayerContainer = ({ playback, placeNewTagMode }: Props) => (
  <Player playback={playback} placeNewTagMode={placeNewTagMode} />
);

const mapStateToProps = ({
  superVideoState: { playback },
  editorState: { placeNewTagMode }
}) => ({
  playback,
  placeNewTagMode
});

export default connect(mapStateToProps)(PlayerContainer);
