import React from 'react';
import { connect } from 'react-redux';
import store from '../store';
import { Button } from '../components/Button';
import { setPlayback } from '../actions/actionCreators';
import { State } from '../types/state';

interface Props {
  playback: boolean;
}

const PlayButtonContainer = ({ playback }): JSX.Element => {
  let caption = 'Play';

  if (playback) caption = 'Pause';

  return (
    <Button
      caption={caption}
      onPress={(): void => {
        store.dispatch(setPlayback(!playback));
      }}
    />
  );
};

const mapStateToProps = ({ superVideoState: { playback } }: State): Props => ({
  playback
});

export default connect(mapStateToProps)(PlayButtonContainer);
