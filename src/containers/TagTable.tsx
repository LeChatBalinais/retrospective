import { connect } from 'react-redux';
import { Props, TagTable } from '../components/TagTable';
import { State } from '../types/state';

const mapStateToProps = ({ tags: { allIDs: IDs } }: State): Props => {
  return { IDs };
};

export default connect(mapStateToProps)(TagTable);
