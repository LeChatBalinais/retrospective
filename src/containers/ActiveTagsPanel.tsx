import { connect } from 'react-redux';
import ActiveTagsPanel, { ValueProps } from '~/components/ActiveTagsPanel';
import { State } from '~/state';
import getCurrentlyVisibleTagIDs from '~/selectors/get-currentily-visible-tag-ids';

const mapStateToProps = (state: State): ValueProps => ({
  IDs: getCurrentlyVisibleTagIDs(state)
});

export default connect(mapStateToProps)(ActiveTagsPanel);
