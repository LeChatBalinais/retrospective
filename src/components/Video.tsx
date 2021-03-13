/* eslint-disable jsx-a11y/media-has-caption */
import React, { useRef, useState, useCallback } from 'react';
import gsap from 'gsap';

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
  onSeeking: (time: number) => void;
  onSeeked: () => void;
  onPlaying: () => void;
  onPause: () => void;
}

export type Props = ValueProps & FuncProps;

const Video = ({
  url: src,
  onDurationChange: onDurationChangeFunc,
  onTimeUpdate: onTimeUpdateFunc,
  onSeeked,
  onSeeking: onSeekingFunc,
  onPlaying,
  onPause,
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

  const onSeeking = useCallback((): void => {
    if (seek) onSeekingFunc(timeSeekTo);
  }, [seek, timeSeekTo, onSeekingFunc]);

  const { current } = videoEl;
  if (current) {
    if (playback) {
      current.play();
      if (!tickOn) {
        gsap.ticker.add(onTick);
        setTickOn(true);
      }
    } else {
      current.pause();
      if (seek && Math.abs(current.currentTime - timeSeekTo) > 0.001) {
        current.currentTime = timeSeekTo;
      }
      if (tickOn) {
        gsap.ticker.remove(onTick);
        setTickOn(false);
      }
    }
  }

  return (
    <video
      preload="auto"
      className="main-video"
      {...{ onDurationChange, onSeeking, onSeeked, onPlaying, onPause, src }}
      ref={videoEl}
    />
  );
};

export default Video;
