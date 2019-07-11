import React from 'react';

interface Props {
  ID: string;
  onMouseDown: () => void;
}
const ActiveTagLabel = ({ ID, onMouseDown }: Props): JSX.Element => {
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

export default ActiveTagLabel;
