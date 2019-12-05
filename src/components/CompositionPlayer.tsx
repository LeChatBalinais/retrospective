import React from 'react';

import VideoContainer from '~/containers/video';
import SeekPreview from '~/containers/seek-preview';

export interface ValueProps {
  compositionID: string;
}

type Props = ValueProps;

const CompositionPlayer = ({ compositionID }: Props): JSX.Element => {
  return (
    <div>
      <div className="box video-box">
        <div className="augmented-video">
          <VideoContainer />
          <SeekPreview />
        </div>
      </div>
    </div>
  );
};

export default CompositionPlayer;
