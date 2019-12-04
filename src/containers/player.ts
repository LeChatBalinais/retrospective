import { connect } from 'react-redux';
import Player, { ValueProps as PlayerValueProps } from '~/components/Player';
import { isPlaceNewTagModeOn, getCurrentTagID } from '~/getters/tag-editor';
import { State } from '~/state';

const mapStateToProps = (state: State): PlayerValueProps => ({
  currentTag: getCurrentTagID(state),
  placeNewTagMode: isPlaceNewTagModeOn(state)
});

export default connect(mapStateToProps)(Player);
