import { connect } from 'react-redux';
import TagTable, {
  ValueProps as TagTableValueProps
} from '~/components/TagList';
import { State } from '~/state';
import { getTagIDsSortedByTime } from '~/selectors/get-tag-ids-sorted-by-time';
import getCurrentlyVisibleTagIDs from '~/selectors/get-currentily-visible-tag-ids';

export enum Stage {
  BeforeExposed,
  Exposed,
  AfterExposed
}

const getDistributedAndSortedTagIDs = (
  state: State
): { beforeExposed: string[]; exposed: string[]; afterExposed: string[] } => {
  const exposedTagIDs = getCurrentlyVisibleTagIDs(state);
  const otherTagIDs = getTagIDsSortedByTime(state);

  const beforeExposed = [];
  const exposed = [];
  const afterExposed = [];

  let stage: Stage = Stage.BeforeExposed;

  if (otherTagIDs.length !== 0) {
    if (exposedTagIDs.includes(otherTagIDs[0])) stage = Stage.Exposed;
    for (let i = 0; i < otherTagIDs.length; i += 1) {
      if (exposedTagIDs.includes(otherTagIDs[i])) {
        if (stage === Stage.BeforeExposed) stage = Stage.Exposed;
      } else if (stage === Stage.Exposed) {
        stage = Stage.AfterExposed;
      }
      switch (+stage) {
        case Stage.BeforeExposed:
          beforeExposed.push(otherTagIDs[i]);
          break;

        case Stage.Exposed:
          exposed.push(otherTagIDs[i]);
          break;
        case Stage.AfterExposed:
          afterExposed.push(otherTagIDs[i]);
          break;
        default:
          break;
      }
    }
  }

  return { beforeExposed, exposed, afterExposed };
};

const mapStateToProps = (state: State): TagTableValueProps => {
  return {
    ...getDistributedAndSortedTagIDs(state)
  };
};

export default connect(mapStateToProps)(TagTable);
