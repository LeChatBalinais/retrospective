import React from 'react';
import ActiveTagLabel from '~/containers/active-tag-label';

export interface ValueProps {
  IDs: string[];
}

type Props = ValueProps;

const ActiveTagsPanel = ({ IDs }: Props): JSX.Element => {
  const tagRowContainers = IDs.map(
    (ID: string): JSX.Element => {
      return <ActiveTagLabel {...{ key: ID, ID }} />;
    }
  );
  return <div className="tags active-tags-panel">{tagRowContainers}</div>;
};

export default ActiveTagsPanel;
