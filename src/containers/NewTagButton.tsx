import React from 'react';
import { connect } from 'react-redux';
import store from '../store';
import Button from '../components/Button';
import { setPlaceNewTagMode } from '../actionCreators';
import { State } from '../types/state';

interface Props {
  placeNewTagMode: boolean;
}

const PlayButtonContainer = ({ placeNewTagMode }): JSX.Element => {
  let caption = 'Place New Tag';

  if (placeNewTagMode) caption = 'X';

  return (
    <Button
      caption={caption}
      onPress={(): void => {
        store.dispatch(setPlaceNewTagMode(!placeNewTagMode));
      }}
    />
  );
};

const mapStateToProps = ({
  editorState: { placeNewTagMode }
}: State): Props => ({
  placeNewTagMode
});

export default connect(mapStateToProps)(PlayButtonContainer);
