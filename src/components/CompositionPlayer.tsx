import React from 'react';

import VideoSegmentContainer from '~/containers/video-segment';

interface TimeInterval {
  from: number;
  to: number;
}

interface ReelSegment {
  videoID: string;
  refID: string;
  interval: TimeInterval;
}

interface Reel {
  segments: ReelSegment[];
}

export interface ValueProps {
  reel: Reel;
}

type Props = ValueProps;

const CompositionPlayer = ({ reel }: Props): JSX.Element => {
  const videos = reel.segments.map(
    ({ videoID, refID }: ReelSegment): JSX.Element => (
      <div className="box video-box" {...{ key: refID }}>
        <div className="augmented-video">
          <VideoSegmentContainer {...{ videoID }} />
        </div>
      </div>
    )
  );

  return <div>{videos}</div>;
};

export default CompositionPlayer;
