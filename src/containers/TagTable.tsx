import { connect } from 'react-redux';
import TagTable, {
  ValueProps as TagTableValueProps
} from '../components/TagTable';
import { State } from '../types/state';
import { getTagIDs } from '../selectors/selectors';

const mapStateToProps = (state: State): TagTableValueProps => {
  return { IDs: getTagIDs(state) };
};

export default connect(mapStateToProps)(TagTable);
