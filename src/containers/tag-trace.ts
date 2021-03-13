import { connect } from 'react-redux';
import TagTrace, {
  ValueProps as TagTraceValueProps
} from '~/components/TagTrace';
import { State } from '~/state';
import { getTag } from '~/getters/tags';

const getTagTracePoints = (state: State, ID: string): string => {
  const tag = getTag(state, ID);

  if (tag === undefined) return undefined;

  const { path } = tag;

  return path.reduce(
    (pointsStr: string, point: { x: number; y: number }): string => {
      return pointsStr.concat(`${point.x},${point.y} `);
    },
    ''
  );
};

const makeMapStateToProps = (): ((
  state: State,
  props: { tagID: string }
) => TagTraceValueProps) => {
  return (state: State, { tagID }: { tagID: string }): TagTraceValueProps => {
    const result = {
      points: getTagTracePoints(state, tagID)
    };
    return result;
  };
};

export default connect(makeMapStateToProps)(TagTrace);
