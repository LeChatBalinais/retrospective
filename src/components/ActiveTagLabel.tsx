import React from 'react';

export interface ValueProps {
  ID: string;
}
export interface FuncProps {
  onMouseDown: () => void;
}

type Props = ValueProps & FuncProps;

export const ActiveTagLabel = ({ ID, onMouseDown }: Props): JSX.Element => {
  return (
    /* eslint-disable-next-line */
    <div
      className="control"
      {...{
        onMouseDown: (
          event: React.MouseEvent<HTMLDivElement, MouseEvent>
        ): void => {
          event.stopPropagation();
          onMouseDown();
        }
      }}
    >
      <span className="tag is-primary active-tag-label">{ID} </span>
    </div>
  );
};
