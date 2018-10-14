// @flow
import React from 'react';
import AugmentedVideoPlayer from '../augmented-video-player/components/augmented-video-editor';
import ControlPanel from './ControlPanel';

type Props = {
  playback: boolean,
  placeNewTagMode: boolean
};

type State = {};

class Player extends React.Component<Props, State> {
  componentDidMount() {
    const app = this.div;

    const player = new AugmentedVideoPlayer();
    player.videoSource = 'http://localhost:3000/video';

    app.appendChild(player.el);

    this.player = player;
  }

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
            this.div = div;
          }}
        />
        <ControlPanel />
      </div>
    );
  }
}

export default Player;
