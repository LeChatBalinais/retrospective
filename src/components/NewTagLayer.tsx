import React from 'react';

interface Props {
  onClick: (x: number, y: number) => void;
}

function createOnClick(
  onClick: (x: number, y: number) => void
): (event: React.MouseEvent<HTMLDivElement>) => void {
  return (event: React.MouseEvent<HTMLDivElement>): void => {
    const rect = event.currentTarget.getBoundingClientRect();
    onClick(
      ((event.clientX - rect.left) / rect.width) * 100,
      ((event.clientY - rect.top) / rect.height) * 100
    );
  };
}

const NewTagLayer = ({ onClick }: Props): JSX.Element => (
  // eslint-disable-next-line
  <div
    className="augmentation addition-layer"
    onClick={createOnClick(onClick)}
  />
);
export default NewTagLayer;
