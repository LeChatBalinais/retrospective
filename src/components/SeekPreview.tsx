/* eslint-disable jsx-a11y/media-has-caption */
import React, { useRef, useCallback } from 'react';

type OnTimeUpdate = (currentTime: number) => void;
type OnDurationChangeFunc = (duration: number) => void;

export interface ValueProps {
  url: string;
  timeSeekTo: number;
  seek: boolean;
  hidden: boolean;
}

export interface FuncProps {
  onSeeking: (time: number) => void;
  onSeeked: () => void;
}

export type Props = ValueProps & FuncProps;

const SeekPreview = ({
  url: src,
  timeSeekTo,
  seek,
  hidden,
  onSeeked,
  onSeeking: onSeekingFunc
}: Props): JSX.Element => {
  const videoEl = useRef(null);

  const onSeeking = useCallback((): void => {
    if (seek) onSeekingFunc(timeSeekTo);
  }, [seek, timeSeekTo, onSeekingFunc]);

  const { current } = videoEl;
  if (current) {
    if (seek && Math.abs(current.currentTime - timeSeekTo) > 0.001) {
      current.currentTime = timeSeekTo;
    }
  }

  return (
    <video
      preload="auto"
      className="seek-preview"
      onSeeking={onSeeking}
      onSeeked={onSeeked}
      src={src}
      hidden={hidden}
      ref={videoEl}
    />
  );
};

export default SeekPreview;
