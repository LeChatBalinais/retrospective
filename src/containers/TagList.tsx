import { connect } from 'react-redux';
import TagTable, {
  ValueProps as TagTableValueProps
} from '~/components/TagList';
import { State } from '~/state';
import { getTagIDs } from '~/selectors/common/tags';

const mapStateToProps = (state: State): TagTableValueProps => {
  return { IDs: getTagIDs(state) };
};

export default connect(mapStateToProps)(TagTable);
