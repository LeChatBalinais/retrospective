import React from 'react';

export interface ValueProps {
  caption: string;
}
export interface FuncProps {
  onMouseDown: () => void;
}

type Props = ValueProps & FuncProps;

const ActiveTagLabel = ({ caption, onMouseDown }: Props): JSX.Element => {
  return (
    /* eslint-disable-next-line */
    <span
      className="tag is-primary active-tag-label"
      {...{
        onClick: (
          event: React.MouseEvent<HTMLDivElement, MouseEvent>
        ): void => {
          event.stopPropagation();
          onMouseDown();
        }
      }}
    >
      {caption}{' '}
    </span>
  );
};

export default ActiveTagLabel;
