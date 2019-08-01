/* eslint-disable jsx-a11y/media-has-caption */
import React, { useRef, useState, useCallback } from 'react';
import { TweenMax } from 'gsap';

type OnTimeUpdate = (currentTime: number) => void;
type OnDurationChangeFunc = (duration: number) => void;

export interface ValueProps {
  url: string;
  playback: boolean;
  currentTime: number;
}

export interface FuncProps {
  onTimeUpdate: OnTimeUpdate;
  onDurationChange: OnDurationChangeFunc;
}

export type Props = ValueProps & FuncProps;

export const Video = ({
  url: src,
  onDurationChange: onDurationChangeFunc,
  onTimeUpdate: onTimeUpdateFunc,
  playback,
  currentTime
}: Props): JSX.Element => {
  const videoEl = useRef(null);
  const [tickOn, setTickOn] = useState(false);

  const onTick = useCallback((): void => {
    if (videoEl === null) return;
    const { current } = videoEl;
    if (current === null) return;
    const { currentTime: videoCurrentTime } = current;
    onTimeUpdateFunc(videoCurrentTime);
  }, [onTimeUpdateFunc]);

  const onDurationChange = (): void => {
    const { current } = videoEl;
    if (!current) return;

    onDurationChangeFunc(current.duration);
  };

  const { current } = videoEl;

  if (current) {
    if (playback) {
      current.play();
      if (!tickOn) {
        TweenMax.ticker.addEventListener('tick', onTick);
        setTickOn(true);
      }
    } else {
      current.pause();
      current.currentTime = currentTime;
      if (tickOn) {
        TweenMax.ticker.removeEventListener('tick', onTick);
        setTickOn(false);
      }
    }
  }

  return (
    <video
      className="main-video"
      {...{ onDurationChange, src }}
      ref={videoEl}
    />
  );
};
