import React from 'react';

export interface Props {
  points?: string;
}

export const TagTrace = (props: Props): JSX.Element => (
  <polyline
    className="tag-trace"
    {...props}
    vectorEffect="non-scaling-stroke"
  />
);
