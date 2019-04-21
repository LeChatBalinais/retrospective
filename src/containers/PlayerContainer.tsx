import React from 'react';
import { connect } from 'react-redux';
import store from '../store';
import Player from '../components/Player';
import { setPlaceNewTagMode, fetchAllVideoMarksAsync } from '../actionCreators';

interface Props {
  playback: any;
  currentTime: any;
  placeNewTagMode: any;
  onTagAdded: any;
}

class PlayerContainer extends React.Component<Props, any> {
  public componentDidMount() {
    store.dispatch(fetchAllVideoMarksAsync('hello'));
  }

  public render() {
    const { playback, currentTime, placeNewTagMode, onTagAdded } = this.props;
    return (
      <Player {...{ playback, currentTime, placeNewTagMode, onTagAdded }} />
    );
  }
}

const mapStateToProps = ({
  superVideoState: { playback, currentTime },
  editorState: { placeNewTagMode }
}) => ({
  playback,
  currentTime,
  placeNewTagMode,
  onTagAdded: () => {
    store.dispatch(setPlaceNewTagMode(false));
  }
});

export default connect(mapStateToProps)(PlayerContainer);
