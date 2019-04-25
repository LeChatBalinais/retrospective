import React from 'react';
import Tag from '../types/tag';

interface Props {
  ID: string;
  tag: Tag;
}

const TagTable = ({ ID, tag }: Props): JSX.Element => {
  return (
    <tr>
      <th>{ID}</th>
      <th>Start at: {tag.path[0].time}</th>
      <th>End at: {tag.path[tag.path.length - 1].time}</th>
    </tr>
  );
};

export default TagTable;
