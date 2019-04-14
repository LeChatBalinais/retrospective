import React from 'react';

const TagTable = ({ ID, tag }) => {
  return (
    <tr>
      <th>{ID}</th>
      <th>Start at: {tag.path[0].time}</th>
      <th>End at: {tag.path[tag.path.length - 1].time}</th>
    </tr>
  );
};

export default TagTable;
