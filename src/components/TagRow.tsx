import React from 'react';
import Tag from '../types/tag';
import Button from './Button';

interface Props {
  ID: string;
  tag: Tag;
  localTag: boolean;
  onPress: () => void;
}
const TagTable = ({ ID, tag, localTag, onPress }: Props): JSX.Element => {
  let buttonCol = null;

  if (localTag) {
    buttonCol = (
      <th>
        <Button {...{ caption: 'Save', onPress }} />
      </th>
    );
  } else {
    buttonCol = (
      <th>
        <Button {...{ caption: 'Delete', onPress }} />
      </th>
    );
  }
  return (
    <tr>
      <th>{ID}</th>
      <th>Start at: {tag.path[0].time}</th>
      <th>End at: {tag.path[tag.path.length - 1].time}</th>
      {buttonCol}
    </tr>
  );
};

export default TagTable;
