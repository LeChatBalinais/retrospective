/* eslint-disable jsx-a11y/media-has-caption */
// @flow
import React from 'react';

type Props = {
  url: string,
  playback: boolean,
  currentTime: number,
  onTimeUpdate: number => void,
  onDurationChange: number => void
};

type State = {};

class Video extends React.Component<Props, State> {
  createOnTimeUpdate = (onTimeUpdate: number => void) => () => {
    const { video: videoCached } = this;
    if (videoCached) {
      const { currentTime } = videoCached;
      onTimeUpdate(currentTime);
    }
  };

  createOnDurationChange = (onDurationChange: number => void) => () => {
    const { video: videoCached } = this;
    if (videoCached) {
      const { duration } = videoCached;
      onDurationChange(duration);
    }
  };

  video: ?HTMLVideoElement;

  render() {
    const {
      video: videoCached,
      props: { url, playback, currentTime, onTimeUpdate, onDurationChange }
    } = this;

    if (videoCached) {
      if (playback) {
        videoCached.play();
      } else {
        videoCached.pause();
      }
      if (videoCached.paused && currentTime)
        videoCached.currentTime = currentTime;
    }

    return (
      <video
        className="main-video"
        src={url}
        type="video/mp4"
        onTimeUpdate={this.createOnTimeUpdate(onTimeUpdate)}
        onDurationChange={this.createOnDurationChange(onDurationChange)}
        ref={video => {
          this.video = video;
        }}
      />
    );
  }
}

export default Video;
