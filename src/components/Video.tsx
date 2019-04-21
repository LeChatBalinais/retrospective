/* eslint-disable jsx-a11y/media-has-caption */

import React from 'react';
import { TweenMax } from 'gsap';

interface Props {
  url: any;
  playback: any;
  currentTime: any;
  onTimeUpdate: any;
  onDurationChange: any;
}

class Video extends React.Component<Props, any> {
  private onTimeUpdatePrv() {
    const { video: videoCached } = this;
    if (videoCached) {
      const { currentTime } = videoCached;
      this.onTimeUpdate(currentTime);
    }
  }

  private onTimeUpdateBinded: any;

  private onTimeUpdate: any;

  private createOnTimeUpdate = () => this.onTimeUpdatePrv.bind(this);

  private createOnDurationChange = onDurationChange => () => {
    const { video: videoCached } = this;
    if (videoCached) {
      const { duration } = videoCached;
      onDurationChange(duration);
    }
  };

  private video: any;

  private currentTimeUpdating: boolean;

  public render() {
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
        onDurationChange={this.createOnDurationChange(onDurationChange)}
        ref={video => {
          this.video = video;
        }}
      />
    );
  }
}

export default Video;
