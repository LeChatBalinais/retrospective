import React from 'react';
import TagExistanceStatusButton from '../containers/TagExistanceStatusButton';

export interface Props {
  ID: string;
  isLocal: boolean;
  isCurrent: boolean;
  onMouseDown?: () => void;
}
export const TagRow = ({
  ID,
  isLocal,
  isCurrent,
  onMouseDown
}: Props): JSX.Element => {

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
      <TagExistanceStatusButton {...{ ID, isLocal }}></TagExistanceStatusButton>
    </div>
  );
};
