/* eslint-disable jsx-a11y/media-has-caption */
// @flow
import React from 'react';
import TweenMax from 'gsap';

type Props = {
  url: string,
  playback: boolean,
  currentTime: number,
  onTimeUpdate: number => void,
  onDurationChange: number => void
};

type State = {};

class Video extends React.Component<Props, State> {
  onTimeUpdate: number => void;

  onTimeUpdateBinded: () => void;

  onTimeUpdatePrv() {
    const { video: videoCached } = this;
    if (videoCached) {
      const { currentTime } = videoCached;
      this.onTimeUpdate(currentTime);
    }
  }

  createOnTimeUpdate = () => this.onTimeUpdatePrv.bind(this);

  createOnDurationChange = (onDurationChange: number => void) => () => {
    const { video: videoCached } = this;
    if (videoCached) {
      const { duration } = videoCached;
      onDurationChange(duration);
    }
  };

  video: ?HTMLVideoElement;

  currentTimeUpdating: ?boolean;

  render() {
    const {
      video: videoCached,
      props: { url, playback, currentTime, onTimeUpdate, onDurationChange }
    } = this;

    this.onTimeUpdate = onTimeUpdate;

    if (!this.onTimeUpdateBinded) {
      this.onTimeUpdateBinded = this.createOnTimeUpdate();
    }

    if (videoCached) {
      if (playback) {
        videoCached.play();
        if (!this.currentTimeUpdating) {
          TweenMax.ticker.addEventListener('tick', this.onTimeUpdateBinded);
          this.currentTimeUpdating = true;
        }
      } else {
        videoCached.pause();
        if (this.currentTimeUpdating) {
          TweenMax.ticker.removeEventListener('tick', this.onTimeUpdateBinded);
          this.currentTimeUpdating = false;
        }
      }
      if (!playback) videoCached.currentTime = currentTime;
    }

    return (
      <video
        className="main-video"
        src={url}
        type="video/mp4"
        onDurationChange={this.createOnDurationChange(onDurationChange)}
        ref={video => {
          this.video = video;
        }}
      />
    );
  }
}

export default Video;
