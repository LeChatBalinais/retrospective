/* eslint-disable jsx-a11y/media-has-caption */
import React, { useRef, useState, useCallback } from 'react';
import { TweenMax } from 'gsap';

type OnTimeUpdate = (currentTime: number) => void;
type OnDurationChangeFunc = (duration: number) => void;

export interface ValueProps {
  url: string;
  playback: boolean;
  seek: boolean;
  timeSeekTo: number;
}

export interface FuncProps {
  onTimeUpdate: OnTimeUpdate;
  onDurationChange: OnDurationChangeFunc;
  onSeeking: () => void;
  onSeeked: (time: number) => void;
}

export type Props = ValueProps & FuncProps;

const Video = ({
  url: src,
  onDurationChange: onDurationChangeFunc,
  onTimeUpdate: onTimeUpdateFunc,
  onSeeked: onSeekedFunc,
  onSeeking,
  playback,
  timeSeekTo,
  seek
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

  const onSeeked = (): void => {
    const { current } = videoEl;
    if (!current) return;

    onSeekedFunc(current.currentTime);
  };

  const onTimeUpdate = (): void => {
    if (playback) return;
    const { current } = videoEl;
    if (!current) return;
    onTimeUpdateFunc(current.currentTime);
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
      if (seek && Math.abs(current.currentTime - timeSeekTo) > 0.001) {
        current.currentTime = timeSeekTo;
      }
      if (tickOn) {
        TweenMax.ticker.removeEventListener('tick', onTick);
        setTickOn(false);
      }
    }
  }

  return (
    <video
      preload="auto"
      className="main-video"
      {...{ onDurationChange, onTimeUpdate, onSeeking, onSeeked, src }}
      ref={videoEl}
    />
  );
};

export default Video;
