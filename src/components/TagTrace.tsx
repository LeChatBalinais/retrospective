import React from 'react';

export interface ValueProps {
  points: string;
}

type Props = ValueProps;

export const TagTrace = ({ points }: Props): JSX.Element => (
  <polyline
    className="tag-trace"
    {...{ points }}
    vectorEffect="non-scaling-stroke"
  />
);
