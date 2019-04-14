import React from 'react';

function createOnClick(onClick) {
  return event => {
    onClick(event.clientX, event.clientY);
  };
}

const NewTagLayer = ({ onClick }) => (
  <svg
    className="augmentation addition-layer"
    onClick={createOnClick(onClick)}
  />
);
export default NewTagLayer;
