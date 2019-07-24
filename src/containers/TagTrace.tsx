import { connect } from 'react-redux';
import { Props, TagTrace } from '../components/TagTrace';
import { State } from '../types/state';
import makeGetTagTracePoints from '../selectors/get-tag-trace-points';

const makeMapStateToProps = (): ((
  state: State,
  props: { tagID: string }
) => Props) => {
  const getTagTracePoints = makeGetTagTracePoints();

  return (state: State, { tagID }: { tagID: string }): Props => {
    const result = {
      points: getTagTracePoints(state, tagID)
    };
    return result;
  };
};

export default connect(makeMapStateToProps)(TagTrace);
