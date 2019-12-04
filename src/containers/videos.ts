import { connect } from 'react-redux';
import Videos, { ValueProps as VideosValueProps } from '~/components/Videos';
import { State } from '~/state';

const mapStateToProps = ({
  entities: {
    videos: { allIDs, byID }
  }
}: State): VideosValueProps => ({
  videos: allIDs.map(
    (ID: string): { globalID: string; name: string } => byID[ID]
  )
});

export default connect(mapStateToProps)(Videos);
