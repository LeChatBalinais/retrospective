// @flow

import React from 'react';
import type { Marker } from '../state-types';

type Props = {
  ID: string,
  tag: Marker
};

const TagTable = ({ ID, tag }: Props) => {
  return (
    <tr>
      <th>{ID}</th>
      <th>Start at: {tag.path[0].time}</th>
      <th>End at: {tag.path[tag.path.length - 1].time}</th>
    </tr>
  );
};

export default TagTable;
