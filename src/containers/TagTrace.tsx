import { connect } from 'react-redux';
import TagTrace, {
  ValueProps as TagTraceValueProps
} from '../components/TagTrace';
import { State } from '../types/state';
import makeGetTagTracePoints from '../selectors/tag-selectors/get-tag-trace-points';

const makeMapStateToProps = (): ((
  state: State,
  props: { tagID: string }
) => TagTraceValueProps) => {
  const getTagTracePoints = makeGetTagTracePoints();

  return (state: State, { tagID }: { tagID: string }): TagTraceValueProps => {
    const result = {
      points: getTagTracePoints(state, tagID)
    };
    return result;
  };
};

export default connect(makeMapStateToProps)(TagTrace);
