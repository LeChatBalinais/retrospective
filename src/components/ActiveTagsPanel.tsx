import React from 'react';
import ActiveTagLabel from '../containers/ActiveTagLabel';

export interface ValueProps {
  IDs: string[];
}

type Props = ValueProps;

export const ActiveTagsPanel = ({ IDs }: Props): JSX.Element => {
  const tagRowContainers = IDs.map(
    (ID: string): JSX.Element => {
      return <ActiveTagLabel {...{ key: ID, ID }} />;
    }
  );
  return (
    <div className="field is-grouped is-grouped-multiline active-tags-panel">
      {tagRowContainers}
    </div>
  );
};
