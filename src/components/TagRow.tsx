import React from 'react';
import Tag from '../types/tag';
import Button from './Button';

interface Props {
  ID: string;
  tag: Tag;
  isLocal: boolean;
  isCurrent: boolean;
  onPress: () => void;
  onMouseDown: () => void;
}
const TagTable = ({
  ID,
  tag,
  isLocal,
  isCurrent,
  onPress,
  onMouseDown
}: Props): JSX.Element => {
  let buttonCol = null;

  if (isLocal) {
    buttonCol = <Button {...{ caption: 'Save', onPress }} />;
  } else {
    buttonCol = <Button {...{ caption: 'Delete', onPress }} />;
  }

  let className = 'box';

  if (isCurrent) className = className.concat(' current-tag-row');

  return (
    /* eslint-disable-next-line */
    <div
      {...{
        className,
        onMouseDown: (
          event: React.MouseEvent<HTMLDivElement, MouseEvent>
        ): void => {
          event.stopPropagation();
          onMouseDown();
        }
      }}
    >
      <span>{ID} </span>
      <span>Start at: {tag.path[0].time}</span>
      <span>End at: {tag.path[tag.path.length - 1].time} </span>
      {buttonCol}
    </div>
  );
};

export default TagTable;
