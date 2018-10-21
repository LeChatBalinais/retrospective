// @flow
import React from 'react';
import AugmentedVideoPlayer from '../augmented-video-player/components/augmented-video-editor';
import ControlPanel from './ControlPanel';
import VideoContainer from '../containers/VideoContainer';

type Props = {
  playback: boolean,
  placeNewTagMode: boolean,
  currentTime: number,
  onTagAdded: void => void
};

type State = {};

class Player extends React.Component<Props, State> {
  componentDidMount() {
    const app = this.divEl;

    const player = new AugmentedVideoPlayer(this.onTagAdded);

    app.appendChild(player.el);

    this.player = player;
  }

  onTagAdded: void => void;

  divEl: ?HTMLDivElement;

  player: any;

  render() {
    const { onTagAdded } = this.props;
    if (this.player) {
      const { playback, placeNewTagMode, currentTime } = this.props;
      this.player.playback = playback;
      this.player.update(currentTime);
      if (placeNewTagMode) {
        this.player.addTag();
      }
    }

    this.onTagAdded = onTagAdded;

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
