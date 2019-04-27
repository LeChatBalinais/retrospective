import React from 'react';
import { connect } from 'react-redux';
import store from '../store';
import Player from '../components/Player';
import { setPlaceNewTagMode, fetchVideoTagsAsync } from '../actionCreators';
import { State } from '../types/state';

interface Props {
  playback: boolean;
  currentTime: number;
  placeNewTagMode: boolean;
  onTagAdded: () => void;
}

class PlayerContainer extends React.Component<Props, {}> {
  public componentDidMount(): void {
    store.dispatch(fetchVideoTagsAsync('hello'));
  }

  public render(): JSX.Element {
    const { playback, currentTime, placeNewTagMode, onTagAdded } = this.props;
    return (
      <Player {...{ playback, currentTime, placeNewTagMode, onTagAdded }} />
    );
  }
}

const mapStateToProps = ({
  superVideoState: { playback, currentTime },
  editorState: { placeNewTagMode }
}: State): Props => ({
  playback,
  currentTime,
  placeNewTagMode,
  onTagAdded: (): void => {
    store.dispatch(setPlaceNewTagMode(false));
  }
});

export default connect(mapStateToProps)(PlayerContainer);
