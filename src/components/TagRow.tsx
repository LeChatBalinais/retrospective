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
    buttonCol = <Button {...{ caption: 'Save', onPress }} />;
  } else {
    buttonCol = <Button {...{ caption: 'Delete', onPress }} />;
  }
  return (
    <div className="box">
      <span>{ID} </span>
      <span>Start at: {tag.path[0].time}</span>
      <span>End at: {tag.path[tag.path.length - 1].time} </span>
      {buttonCol}
    </div>
  );
};

export default TagTable;
