import { connect } from 'react-redux';
import {
  ValueProps as TagTableValueProps,
  TagTable
} from '../components/TagTable';
import { State } from '../types/state';
import { getTagIDs } from '../selectors/selectors';

const mapStateToProps = (state: State): TagTableValueProps => {
  return { IDs: getTagIDs(state) };
};

export default connect(mapStateToProps)(TagTable);
