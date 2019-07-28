import { createSelector, OutputParametricSelector } from 'reselect';
import { getCurrentTime } from './selectors';
import { State, Tag } from '../types/state';
import makeGetTag from './get-tag';


export const makeGetTagAppearsAt = (): OutputParametricSelector<
    State,
    string,
    { time: number, x: number, y: number },
    (res: Tag) => { time: number, x: number, y: number }
> => {

    const getTag = makeGetTag();

    return createSelector(
        [getTag],
        (tag: Tag): { time: number, x: number, y: number } => {
            if (tag === undefined) return undefined;

            const { path } = tag;

            if (path.length === 0) return undefined;

            const [appearsAt] = path;

            return appearsAt;
        }
    );
};

export const makeGetTagDisappearsAt = (): OutputParametricSelector<
    State,
    string,
    { time: number, x: number, y: number },
    (res: Tag) => { time: number, x: number, y: number }
> => {

    const getTag = makeGetTag();

    return createSelector(
        [getTag],
        (tag: Tag): { time: number, x: number, y: number } => {

            if (tag === undefined) return undefined;

            const { path } = tag;

            if (path.length === 0) return undefined;

            const {
                length: l,
                [l - 1]: disappearsAt
            } = path;

            return disappearsAt;
        }
    );
};

export const makeGetCurrentTagPosition = (): OutputParametricSelector<
    State,
    string,
    { x: number, y: number },
    (res: Tag, currentTime: number) => { x: number, y: number }
> => {
    const getTag = makeGetTag();

    return createSelector([getTag, getCurrentTime], ({ path }: Tag, currentTime: number): { x: number, y: number } => {

        if (path.length === 0)
            return undefined;

        let x = 0;
        let y = 0;

        const { length: l, 0: firstPoint, [l - 1]: lastPoint } = path;

        if (currentTime < firstPoint.time) {
            ({ x, y } = firstPoint);
        } else if (currentTime > lastPoint.time) {
            ({ x, y } = lastPoint);
        } else {
            for (let i = 0; i < path.length; i += 1) {

                const { [i]: iPoint } = path;

                if (path[i].time === currentTime) {
                    ({ x } = iPoint);
                    ({ y } = iPoint);
                    break;
                }
                else {
                    const { [i + 1]: nextToIPoint } = path;
                    if (
                        iPoint.time <= currentTime &&
                        nextToIPoint.time >= currentTime
                    ) {
                        x = (iPoint.x + nextToIPoint.x) / 2;
                        y = (iPoint.y + nextToIPoint.y) / 2;
                        break;
                    }
                }
            }
        }
        return { x, y }
    })
}