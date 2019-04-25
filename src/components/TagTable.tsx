import React from 'react';
import TagRowContainer from '../containers/TagRowContainer';

interface Props {
  IDs: string[];
}

const TagTable = ({ IDs }: Props): JSX.Element => {
  const tagRowContainers = IDs.map(
    (ID: string): JSX.Element => <TagRowContainer {...{ key: ID, ID }} />
  );
  return (
    <table>
      <tbody>{tagRowContainers}</tbody>
    </table>
  );
};

export default TagTable;
