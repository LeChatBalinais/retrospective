import { connect } from 'react-redux';
import { Dispatch } from 'react';
import TagRow, { ValueProps, FuncProps } from '../components/TagRow';
import { makeIsTagLocal } from '../selectors/tag-selectors';
import { isTagCurrent } from '../selectors/selectors';
import {
  State,
  Action,
  ThunkDispatch,
  SetCurrentTagPayload,
  SetUserSeekPayload,
  SeekingStatus
} from '../types';
import setUserSeek from '../actions/set-user-seek';
import setCurrentTag from '../actions/set-current-tag';
import connectAction, {
  mapStateToActionCreator
} from '../utils/map-state-to-action';
import {
  setTagStartAsCurrentTime,
  SetTagStartAsCurrentTimePayload
} from '../thunks/set-tag-start-as-current-time';

type MapStateToProps = (state: State, { ID }: Props) => ValueProps;

type OnMouseDownPayload = SetCurrentTagPayload &
  SetUserSeekPayload &
  SetTagStartAsCurrentTimePayload;

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
  return (dispatch: ThunkDispatch, { ID }: Props): FuncProps => ({
    onMouseDown: (): void => {
      dispatch(
        connectAction<OnMouseDownPayload>([
          mapStateToActionCreator(setCurrentTag),
          mapStateToActionCreator(setUserSeek),
          setTagStartAsCurrentTime
        ])({ ID, status: SeekingStatus.Seeking })
      );

      dispatch(setUserSeek({ status: SeekingStatus.Idle }));
    }
  });
};

export default connect(
  makeMapStateToProps,
  makeMapDispatchToProps
)(TagRow);
