// @flow
import React from 'react';
import { connect } from 'react-redux';
import store from '../store';
import Player from '../components/Player';
import { setPlaceNewTagMode, fetchAllVideoMarksAsync } from '../actionCreators';

type Props = {
  playback: boolean,
  placeNewTagMode: boolean,
  currentTime: number,
  onTagAdded: void => void
};

type State = {};

class PlayerContainer extends React.Component<Props, State> {
  componentDidMount() {
    store.dispatch(fetchAllVideoMarksAsync('hello'));
  }

  render() {
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
