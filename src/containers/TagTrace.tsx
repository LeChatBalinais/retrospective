import React from 'react';
import { connect } from 'react-redux';
import TagTraceComponent from '../components/TagTrace';
import { State } from '../types/state';

interface Props {
  tagID: string;
  points?: string;
}

const GraphicalAugmentation = ({ points }: Props): JSX.Element => (
  <TagTraceComponent {...{ points }} />
);

function getPointsString(
  pointsStr: string,
  point: { x: number; y: number }
): string {
  return pointsStr.concat(`${point.x},${point.y} `);
}

const mapStateToProps = (
  { tags: { byID } }: State,
  { tagID }: Props
): Props => {
  const {
    [tagID]: { path }
  } = byID;

  const points = path.reduce(getPointsString, '');

  const result = {
    tagID,
    points
  };
  return result;
};

export default connect(mapStateToProps)(GraphicalAugmentation);
