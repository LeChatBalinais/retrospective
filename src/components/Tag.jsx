// @flow
import React from 'react';

type Props = {
  className: string,
  x: number,
  y: number
};

const Tag = ({ className, x, y }: Props) => (
  <circle
    cx={x}
    cy={y}
    r={3}
    stroke="red"
    strokeWidth="3"
    fill="red"
    className={className}
  />
);

export default Tag;
