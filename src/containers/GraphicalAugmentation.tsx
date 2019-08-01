import { connect } from 'react-redux';
import GraphicalAugmentation, {
  ValueProps
} from '../components/GraphicalAugmentation';
import { State } from '../types/state';
import { getVisibleTraceTagIDs } from '../selectors/selectors';

const mapStateToProps = (state: State): ValueProps => {
  const result = {
    tagIDs: getVisibleTraceTagIDs(state)
  };
  return result;
};

export default connect(mapStateToProps)(GraphicalAugmentation);
