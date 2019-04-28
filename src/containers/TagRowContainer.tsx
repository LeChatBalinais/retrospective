import React from 'react';
import { connect } from 'react-redux';
import TagRow from '../components/TagRow';
import { State } from '../types/state';
import TagState from '../types/tag';
import { saveTagAsync, deleteTagAsync } from '../actionCreators';
import store from '../store';

interface Props {
  ID: string;
  tag?: TagState;
  localTag?: boolean;
}

const onPress = (
  tagID: string,
  tag: TagState,
  local: boolean
): (() => void) => {
  if (local)
    return (): void => {
      store.dispatch(saveTagAsync(tagID, tag));
    };

  return (): void => {
    store.dispatch(deleteTagAsync(tagID));
  };
};

const AugmentationContainer = ({ ID, tag, localTag }: Props): JSX.Element => (
  <TagRow {...{ ID, tag, localTag, onPress: onPress(ID, tag, localTag) }} />
);

const mapStateToProps = (
  { tags: { byID }, localTags }: State,
  { ID }: Props
): Props => {
  return {
    ID,
    tag: byID[ID],
    localTag: localTags.includes(ID)
  };
};

export default connect(mapStateToProps)(AugmentationContainer);
