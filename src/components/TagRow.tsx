import React from 'react';
import TagExistanceStatusButton from '~/containers/tag-existance-status-button';

export interface ValueProps {
  ID: string;
  caption: string;
  isSaveButtonAvailable: boolean;
  isHighlighted: boolean;
}

export interface FuncProps {
  onClick: () => void;
}

export type Props = ValueProps & FuncProps;

const TagRow = ({
  ID,
  caption,
  isSaveButtonAvailable: isLocal,
  isHighlighted: isCurrent,
  onClick
}: Props): JSX.Element => {
  let className = 'box';

  if (isCurrent) className = className.concat(' current-tag-row');

  return (
    /* eslint-disable-next-line */
    <div
      {...{
        className,
        onClick: (
          event: React.MouseEvent<HTMLDivElement, MouseEvent>
        ): void => {
          event.stopPropagation();
          onClick();
        }
      }}
    >
      <span>{caption} </span>
      <TagExistanceStatusButton {...{ ID, isLocal }} />
    </div>
  );
};

export default TagRow;
