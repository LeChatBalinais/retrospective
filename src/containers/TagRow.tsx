import { connect } from 'react-redux';
import { Dispatch } from 'react';
import TagRow, { ValueProps, FuncProps } from '../components/TagRow';
import { State } from '../types/state';
import { makeIsTagLocal } from '../selectors/tag-selectors';
import { isTagCurrent } from '../selectors/selectors';
import { Action } from '../types/types';
import setUserSeek, { SetUserSeekPayload } from '../actions/set-user-seek';
import setCurrentTag, {
  SetCurrentTagPayload
} from '../actions/set-current-tag';
import seekToTag, { SeekToTagPayload } from '../actions/seek-to-tag';
import actionCombination from '../actions/utils/action-combination';

type MapStateToProps = (state: State, { ID }: Props) => ValueProps;

type MapDispatchToProps = (
  dispatch: Dispatch<Action>,
  { ID }: { ID: string }
) => FuncProps;

interface Props {
  ID: string;
}

const makeMapStateToProps = (): MapStateToProps => {
  const isTagLocal = makeIsTagLocal();

  return (state: State, { ID }: Props): ValueProps => {
    return {
      ID,
      isLocal: isTagLocal(state, ID),
      isCurrent: isTagCurrent(state, ID)
    };
  };
};

const makeMapDispatchToProps = (): MapDispatchToProps => {
  return (dispatch: Dispatch<Action>, { ID }: Props): FuncProps => ({
    onMouseDown: (): void => {
      dispatch(
        actionCombination<
          SetCurrentTagPayload & SetUserSeekPayload & SeekToTagPayload
        >([setCurrentTag, setUserSeek, seekToTag])({ ID, mode: true })
      );
      setTimeout((): void => {
        dispatch(setUserSeek({ mode: false }));
      }, 100);
    }
  });
};

export default connect(
  makeMapStateToProps,
  makeMapDispatchToProps
)(TagRow);
