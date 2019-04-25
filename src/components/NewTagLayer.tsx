import React from 'react';

interface Props {
  onClick: (x: number, y: number) => void;
}

function createOnClick(
  onClick: (x: number, y: number) => void
): (event: React.MouseEvent<SVGSVGElement>) => void {
  return (event: React.MouseEvent<SVGSVGElement>): void => {
    onClick(event.clientX, event.clientY);
  };
}

const NewTagLayer = ({ onClick }: Props): JSX.Element => (
  <svg
    className="augmentation addition-layer"
    onClick={createOnClick(onClick)}
  />
);
export default NewTagLayer;
