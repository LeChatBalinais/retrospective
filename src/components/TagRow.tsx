import React from 'react';
import TagExistanceStatusButton from '../containers/TagExistanceStatusButton';

export interface ValueProps {
  ID: string;
  isLocal: boolean;
  isCurrent: boolean;
}

export interface FuncProps {
  onMouseDown: () => void;
}

export type Props = ValueProps & FuncProps;

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
      <TagExistanceStatusButton {...{ ID, isLocal }} />
    </div>
  );
};
