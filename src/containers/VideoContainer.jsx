// @flow
import React from 'react';
import { connect } from 'react-redux';
import Video from '../components/Video';

type Props = {
  playback: boolean,
  url: string
};

const PlayerContainer = ({ playback, url }: Props) => (
  <Video playback={playback} src={url} />
);

const mapStateToProps = ({ superVideoState: { playback, url } }) => ({
  playback,
  url
});

export default connect(mapStateToProps)(PlayerContainer);
