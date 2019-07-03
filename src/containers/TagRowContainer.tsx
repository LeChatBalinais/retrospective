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
  isLocal?: boolean;
  isCurrent?: boolean;
}

const onPress = (
  tagID: string,
  tag: TagState,
  isLocal: boolean
): (() => void) => {
  if (isLocal)
    return (): void => {
      store.dispatch(saveTagAsync(tagID, tag));
    };

  return (): void => {
    store.dispatch(deleteTagAsync(tagID));
  };
};

const AugmentationContainer = ({
  ID,
  tag,
  isLocal,
  isCurrent
}: Props): JSX.Element => (
  <TagRow
    {...{ ID, tag, isLocal, isCurrent, onPress: onPress(ID, tag, isLocal) }}
  />
);

const mapStateToProps = (
  { tags: { byID }, localTags, currentTag }: State,
  { ID }: Props
): Props => {
  return {
    ID,
    tag: byID[ID],
    isLocal: localTags.includes(ID),
    isCurrent: ID === currentTag
  };
};

export default connect(mapStateToProps)(AugmentationContainer);
