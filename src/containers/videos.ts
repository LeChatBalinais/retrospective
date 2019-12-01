import { connect } from 'react-redux';
import { Dispatch } from '~/utils/dispatch';
import Videos, { ValueProps as VideosValueProps, FuncProps as VideosFuncProps } from '~/components/Videos';
import { State } from '~/state';
import { actionCreator as playerLoaded } from '~/actions-reducers/ui-player-loaded';

const mapStateToProps = ({ entities: { videos: { allIDs, byID } } }: State): VideosValueProps => ({
  videos: allIDs.map((ID: string): { globalID: string, name: string } => byID[ID])
});

const mapDispatchToProps = (dispatch: Dispatch): VideosFuncProps => ({
  onComponentDidMount: (): void => {
    dispatch(playerLoaded());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Videos);
