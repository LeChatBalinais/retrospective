import React from 'react';

export interface FuncProps {
  onClick: (x: number, y: number) => void;
}

type Props = FuncProps;

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

export const NewTagLayer = ({ onClick }: Props): JSX.Element => (
  // eslint-disable-next-line
  <div
    className="augmentation addition-layer"
    onClick={createOnClick(onClick)}
  />
);
