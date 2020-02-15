import React from 'react';
import TagExistanceStatusButton from '~/containers/tag-existance-status-button';

export interface ValueProps {
  ID: string;
  caption: string;
  isSaveButtonAvailable: boolean;
  className: string;
}

export interface FuncProps {
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export type Props = ValueProps & FuncProps;

const TagRow = ({
  ID,
  caption,
  isSaveButtonAvailable: isLocal,
  className,
  onClick,
  onMouseEnter,
  onMouseLeave
}: Props): JSX.Element => {
  return (
    /* eslint-disable-next-line */
    <div
      className={className}
      onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
        event.stopPropagation();
        onClick();
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <span>{caption} </span>
      <TagExistanceStatusButton ID={ID} isLocal={isLocal} />
    </div>
  );
};

export default TagRow;
