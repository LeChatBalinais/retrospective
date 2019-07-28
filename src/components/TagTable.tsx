import React from 'react';
import TagRowContainer from '../containers/TagRow';

export interface ValueProps {
  IDs: string[];
}

type Props = ValueProps;

export const TagTable = ({ IDs }: Props): JSX.Element => {
  const tagRowContainers = IDs.map(
    (ID: string): JSX.Element => <TagRowContainer {...{ key: ID, ID }} />
  );
  return <div className="box markers-list">{tagRowContainers}</div>;
};
