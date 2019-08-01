import React from 'react';
import TagTrace from '../containers/TagTrace';

export interface ValueProps {
  tagIDs: string[];
}

type Props = ValueProps;

const GraphicalAugmentation = ({ tagIDs }: Props): JSX.Element => {
  const tagTraceContainers = tagIDs.map(
    (tagID: string): React.ReactNode => <TagTrace {...{ key: tagID, tagID }} />
  );
  return (
    <div className="augmentation">
      <svg
        className="graphical-augmentation"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {tagTraceContainers}
      </svg>
    </div>
  );
};

export default GraphicalAugmentation;
