import { createSelector, OutputParametricSelector } from 'reselect';
import makeGetTag from './get-tag';
import { State } from '../types/state';
import Tag from '../types/tag';

function getPointsString(
  pointsStr: string,
  point: { x: number; y: number }
): string {
  return pointsStr.concat(`${point.x},${point.y} `);
}

const makeGetTagTracePoints = (): OutputParametricSelector<
  State,
  string,
  string,
  (res: Tag, ID: string) => string
> => {
  const getTag = makeGetTag();

  return createSelector(
    [getTag],
    (tag: Tag): string => {
      return tag.path.reduce(getPointsString, '');
    }
  );
};

export default makeGetTagTracePoints;
