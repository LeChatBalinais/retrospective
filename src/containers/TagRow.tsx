import { connect } from 'react-redux';
import { Dispatch } from 'react';
import { Props, TagRow } from '../components/TagRow';
import { State } from '../types/state';
import {
  setCurrentTag,
  seekToTag,
  setUserSeek
} from '../actions/actionCreators';
import saveTagAsync from '../actions/asyncActionCreators/save-tag';
import deleteTagAsync from '../actions/asyncActionCreators/delete-tag';
import store from '../store';
import makeIsTagLocal from '../selectors/is-tag-local';
import { isTagCurrent } from '../selectors/selectors';
import { Action } from '../types/action';

const onPress = (tagID: string, isLocal: boolean): (() => void) => {
  if (isLocal)
    return (): void => {
      store.dispatch(saveTagAsync(tagID));
    };

  return (): void => {
    store.dispatch(deleteTagAsync(tagID));
  };
};

const makeMapStateToProps = (): ((
  state: State,
  { ID }: { ID: string }
) => Props) => {
  const isTagLocal = makeIsTagLocal();

  return (state: State, { ID }: { ID: string }): Props => {
    return {
      ID,
      isLocal: isTagLocal(state, ID),
      isCurrent: isTagCurrent(state, ID)
    };
  };
};

const makeMapDispatchToProps = (): ((
  dispatch: Dispatch<Action>,
  { ID }: { ID: string }
) => {
  onPress: () => void;
  onMouseDown: () => void;
}) => {
  return (
    dispatch: Dispatch<Action>,
    { ID }: { ID: string }
  ): {
    onPress: () => void;
    onMouseDown: () => void;
  } => ({
    onPress: onPress(ID, false),
    onMouseDown: (): void => {
      dispatch(setCurrentTag(ID));
      dispatch(setUserSeek(true));
      dispatch(seekToTag(ID));
      setTimeout((): void => {
        dispatch(setUserSeek(false));
      }, 100);
    }
  });
};

export default connect(
  makeMapStateToProps,
  makeMapDispatchToProps
)(TagRow);
