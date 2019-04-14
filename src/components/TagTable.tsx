import React from 'react';
import TagRowContainer from '../containers/TagRowContainer';

const TagTable = ({ IDs }) => {
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
