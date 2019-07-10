import React from 'react';
import { connect } from 'react-redux';
import TagRowComponent from '../components/TagRow';
import { State } from '../types/state';
import TagState from '../types/tag';
import {
  saveTagAsync,
  deleteTagAsync,
  setCurrentTag,
  seekToTag,
  setUserSeek
} from '../actionCreators';
import store from '../store';

interface Props {
  ID: string;
  tag?: TagState;
  isLocal?: boolean;
  isCurrent?: boolean;
  playback?: boolean;
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

const TagRow = ({
  ID,
  tag,
  isLocal,
  isCurrent,
  playback
}: Props): JSX.Element => (
  <TagRowComponent
    {...{
      ID,
      tag,
      isLocal,
      isCurrent,
      onPress: onPress(ID, tag, isLocal),
      onMouseDown: (): void => {
        store.dispatch(setCurrentTag(ID));
        store.dispatch(setUserSeek(true));
        store.dispatch(seekToTag(ID));
        setTimeout((): void => {
          store.dispatch(setUserSeek(false));
        }, 100);
      }
    }}
  />
);

const mapStateToProps = (
  {
    superVideoState: { playback },
    tags: { byID },
    localTags,
    currentTag
  }: State,
  { ID }: Props
): Props => {
  return {
    ID,
    tag: byID[ID],
    isLocal: localTags.includes(ID),
    isCurrent: ID === currentTag,
    playback
  };
};

export default connect(mapStateToProps)(TagRow);
