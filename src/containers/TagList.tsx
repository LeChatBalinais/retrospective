import { connect } from 'react-redux';
import TagTable, {
  ValueProps as TagTableValueProps
} from '~/components/TagList';
import { State } from '~/state';
import { getTagIDs } from '~/getters/tags';

const mapStateToProps = (state: State): TagTableValueProps => {
  return { IDs: getTagIDs(state) };
};

export default connect(mapStateToProps)(TagTable);
