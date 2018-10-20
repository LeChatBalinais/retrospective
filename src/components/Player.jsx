// @flow
import React from 'react';
import AugmentedVideoPlayer from '../augmented-video-player/components/augmented-video-editor';
import ControlPanel from './ControlPanel';
import VideoContainer from '../containers/VideoContainer';

type Props = {
  playback: boolean,
  placeNewTagMode: boolean
};

type State = {};

class Player extends React.Component<Props, State> {
  constructor() {
    super();
    this.playback = false;
  }

  componentDidMount() {
    const app = this.divEl;

    const player = new AugmentedVideoPlayer();
    player.videoSource = 'http://localhost:3000/video';

    app.appendChild(player.el);

    this.player = player;
  }

  divEl: ?HTMLDivElement;

  playback: boolean;

  render() {
    if (this.player) {
      const { playback, placeNewTagMode } = this.props;
      if (playback) {
        this.player.play();
      } else {
        this.player.pause();
      }
      if (placeNewTagMode) {
        this.player.addTag();
      }
    }

    return (
      <div>
        <div
          className="app"
          ref={div => {
            this.divEl = div;
          }}
        />
        <VideoContainer />
        <ControlPanel />
      </div>
    );
  }
}

export default Player;
