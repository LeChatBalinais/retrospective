import React from 'react';

interface Props {
  points: string;
}

const TagTrace = (props: Props): JSX.Element => (
  <polyline
    className="tag-trace"
    {...props}
    vectorEffect="non-scaling-stroke"
  />
);
export default TagTrace;
