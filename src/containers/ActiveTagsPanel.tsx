import { connect } from 'react-redux';
import { ValueProps, ActiveTagsPanel } from '../components/ActiveTagsPanel';
import { State } from '../types/state';
import getVisibleTagIDs from '../selectors/get-visible-tag-ids';

const mapStateToProps = (state: State): ValueProps => ({
  IDs: getVisibleTagIDs(state)
});

export default connect(mapStateToProps)(ActiveTagsPanel);
