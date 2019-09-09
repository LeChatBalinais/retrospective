import { connect } from 'react-redux';
import TagTable, {
  ValueProps as TagTableValueProps
} from '../components/TagList';
import { State } from '../types';
import { getTagIDs } from '../selectors/selectors';

const mapStateToProps = (state: State): TagTableValueProps => {
  return { IDs: getTagIDs(state) };
};

export default connect(mapStateToProps)(TagTable);
