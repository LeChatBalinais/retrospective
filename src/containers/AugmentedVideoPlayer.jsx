// @flow
import React from 'react';
import { connect } from 'react-redux';
import AugmentedVideoPlayerC from '../components/AugmentedVideoPlayer';

type Props = {
  playback: boolean,
  placeNewTagMode: boolean
};

const AugmentedVideoPlayerContainer = ({
  playback,
  placeNewTagMode
}: Props) => (
  <AugmentedVideoPlayerC
    playback={playback}
    placeNewTagMode={placeNewTagMode}
  />
);

const mapStateToProps = ({
  superVideoState: { playback },
  editorState: { placeNewTagMode }
}) => ({
  playback,
  placeNewTagMode
});

export default connect(mapStateToProps)(AugmentedVideoPlayerContainer);
