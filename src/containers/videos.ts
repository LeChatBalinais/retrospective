import { connect } from 'react-redux';
import Videos, { ValueProps as VideosValueProps } from '~/components/Videos';
import { State } from '~/state';

const mapStateToProps = (state: State): VideosValueProps => ({
  videoIDs: []
});

export default connect(mapStateToProps)(Videos);
