import { getPointTagAppearsAt } from '~/selectors/get-point-tag-appears-at';
import { getTagIDs } from '~/getters/tags';
import { State } from '~/state';
import { getPointTagDisappearsAt } from './get-point-tag-disappears-at';
import { getIDofVideoInReferenceEditor } from '~/getters/location';

function compareTagsOnTimeLine(
  state: State,
  firstID: string,
  secondID: string
): number {
  const { time: timeFirstTagAppearsAt } = getPointTagAppearsAt(state, firstID);
  const { time: timeSecondTagAppearsAt } = getPointTagAppearsAt(
    state,
    secondID
  );

  if (timeFirstTagAppearsAt !== timeSecondTagAppearsAt)
    return timeFirstTagAppearsAt - timeSecondTagAppearsAt;

  const { time: timeFirstTagDisappearsAt } = getPointTagDisappearsAt(
    state,
    firstID
  );
  const { time: timeSecondTagDisappearsAt } = getPointTagDisappearsAt(
    state,
    secondID
  );

  return timeFirstTagDisappearsAt - timeSecondTagDisappearsAt;
}

export const getTagIDsSortedByTime = (state: State): string[] =>
  getTagIDs(state).filter((tagID: string): boolean => {
    const { entities: { tags: { byID: { [tagID]: { videoID } } } } } = state;
    return videoID === getIDofVideoInReferenceEditor(state);

  }).sort((firstID: string, secondID: string): number =>
    compareTagsOnTimeLine(state, firstID, secondID)
  );
