import { getTagPath } from '~/getters/tags';
import { State } from '~/state';

export const getTagPositionByTime = (
  state: State,
  ID: string,
  time: number
): { x: number; y: number } => {
  const path = getTagPath(state, ID);

  if (path.length === 0) return undefined;

  let x = 0;
  let y = 0;

  const { length: l, 0: firstPoint, [l - 1]: lastPoint } = path;

  if (time < firstPoint.time) {
    ({ x, y } = firstPoint);
  } else if (time > lastPoint.time) {
    ({ x, y } = lastPoint);
  } else {
    for (let i = 0; i < path.length; i += 1) {
      const { [i]: iPoint } = path;

      if (path[i].time === time) {
        ({ x } = iPoint);
        ({ y } = iPoint);
        break;
      } else {
        const { [i + 1]: nextToIPoint } = path;
        if (iPoint.time <= time && nextToIPoint.time >= time) {
          x = (iPoint.x + nextToIPoint.x) / 2;
          y = (iPoint.y + nextToIPoint.y) / 2;
          break;
        }
      }
    }
  }
  return { x, y };
};
