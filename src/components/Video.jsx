/* eslint-disable jsx-a11y/media-has-caption */
// @flow
import React from 'react';

type Props = {
  src: string,
  playback: boolean
};

type State = {};

class Video extends React.Component<Props, State> {
  video: ?HTMLVideoElement;

  render() {
    const {
      video: videoCached,
      props: { src, playback }
    } = this;

    console.log(src);

    if (videoCached) {
      if (playback) {
        videoCached.play();
      } else {
        videoCached.pause();
      }
    }

    return (
      <video
        className="main-video"
        src={src}
        type="video/mp4"
        ref={video => {
          this.video = video;
        }}
      />
    );
  }
}

export default Video;
