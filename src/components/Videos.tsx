import React from 'react';
import { Link } from '@reach/router';

export interface ValueProps {
  videoIDs: string[];
}

type Props = ValueProps;

const TagTable = ({ videoIDs }: Props): JSX.Element => {
  const videoIDsLinks = videoIDs.map(
    (ID: string): JSX.Element => <Link {...{ to: ID, ID }}>{ID}</Link>
  );

  return (
    <div className="box markers-list">
      <div>{videoIDsLinks}</div>
    </div>
  );
};

export default TagTable;
