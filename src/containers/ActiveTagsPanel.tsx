import { connect } from 'react-redux';
import ActiveTagsPanel, { ValueProps } from '../components/ActiveTagsPanel';
import { State } from '../types';
import getVisibleTagIDs from '../selectors/get-visible-tag-ids';

const mapStateToProps = (state: State): ValueProps => ({
  IDs: getVisibleTagIDs(state)
});

export default connect(mapStateToProps)(ActiveTagsPanel);
