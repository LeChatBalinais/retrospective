// @flow
import React from 'react';

type Props = {
  onClick: (number, number) => void
};

function createOnClick(onClick: (number, number) => void) {
  return (event: SyntheticMouseEvent<any>) => {
    onClick(event.clientX, event.clientY);
  };
}

const PlaceNewMarker = ({ onClick }: Props) => (
  <svg
    className="augmentation addition-layer"
    onClick={createOnClick(onClick)}
  />
);
export default PlaceNewMarker;
