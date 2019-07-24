import React from 'react';
import TagRowContainer from '../containers/TagRow';

export interface Props {
  IDs: string[];
}

export const TagTable = ({ IDs }: Props): JSX.Element => {
  const tagRowContainers = IDs.map(
    (ID: string): JSX.Element => <TagRowContainer {...{ key: ID, ID }} />
  );
  return <div className="box markers-list">{tagRowContainers}</div>;
};
