// @flow
import React from 'react';
import TagRowContainer from '../containers/TagRowContainer';

type Props = {
  IDs: Array<string>
};

const TagTable = ({ IDs }: Props) => {
  const tagRowContainers = IDs.map(ID => (
    <TagRowContainer {...{ key: ID, ID }} />
  ));
  return (
    <table>
      <tbody>{tagRowContainers}</tbody>
    </table>
  );
};

export default TagTable;
