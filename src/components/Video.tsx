/* eslint-disable jsx-a11y/media-has-caption */

import React from 'react';
import { TweenMax } from 'gsap';

type OnTimeUpdate = (currentTime: number) => void;
type OnDurationChangeFunc = (duration: number) => void;

interface Props {
  url: string;
  playback: boolean;
  currentTime?: number;
  onTimeUpdate: OnTimeUpdate;
  onDurationChange: OnDurationChangeFunc;
}

class Video extends React.Component<Props, {}> {
  public constructor(props: Props) {
    super(props);
    this.video = React.createRef();
  }

  private onTimeUpdatePrv(): void {
    const {
      video: { current: videoCached }
    } = this;
    if (videoCached) {
      const { currentTime } = videoCached;
      this.onTimeUpdate(currentTime);
    }
  }

  private onTimeUpdateBinded: OnTimeUpdate;

  private onTimeUpdate: OnTimeUpdate;

  private createOnTimeUpdate = (): OnTimeUpdate =>
    this.onTimeUpdatePrv.bind(this);

  private createOnDurationChange = (
    onDurationChange: OnDurationChangeFunc
  ): (() => void) => (): void => {
    const {
      video: { current: videoCached }
    } = this;
    if (videoCached) {
      const { duration } = videoCached;
      onDurationChange(duration);
    }
  };

  private video: React.RefObject<HTMLVideoElement>;

  private currentTimeUpdating: boolean;

  public render(): JSX.Element {
    const {
      video: { current: videoCached },
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
        ref={this.video}
      />
    );
  }
}

export default Video;
