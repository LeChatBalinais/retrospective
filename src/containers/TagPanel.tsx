import { Dispatch } from 'react';
import { connect } from 'react-redux';
import TagPanel, {
  ValueProps as TagPanelValueProp,
  FuncProps as TagPanelFuncProp
} from '../components/TagPanel';
import { getCurrentTagID } from '../selectors/selectors';
import makeGetTagInfo from '../selectors/get-tag-info';
import { State, Action } from '../types';
import setTagTraceVisible from '../actions/set-tag-trace-visible';
import setTimeTagAppearsAt from '../actions/set-time-tag-appears-at';
import setTimeTagDisappearsAt from '../actions/set-time-tag-disappears-at';

interface Props {
  ID: string;
}

type MapDispatchToProps = (
  dispatch: Dispatch<Action>,
  { ID }: Props
) => TagPanelFuncProp;

type MapStateToProps = (state: State) => TagPanelValueProp;

const onTagTraceVisbileCheckboxInput = (
  dispatch: Dispatch<Action>,
  ID: string
): ((visible: boolean) => void) => {
  return (visible: boolean): void => {
    dispatch(setTagTraceVisible({ ID, visible }));
  };
};

const onAppearsAtInput = (
  dispatch: Dispatch<Action>,
  ID: string
): ((visible: number) => void) => {
  return (time: number): void => {
    dispatch(setTimeTagAppearsAt({ ID, time }));
  };
};

const onDisappearsAtInput = (
  dispatch: Dispatch<Action>,
  ID: string
): ((visible: number) => void) => {
  return (time: number): void => {
    dispatch(setTimeTagDisappearsAt({ ID, time }));
  };
};

const makeMapStateToProps = (): MapStateToProps => {
  const getTagInfo = makeGetTagInfo();

  return (state: State): TagPanelValueProp => {
    const ID = getCurrentTagID(state);
    const tag = getTagInfo(state, ID);

    return {
      name: ID,
      start: tag.appearsAt,
      end: tag.disapearsAt,
      traceIsVisible: tag.traceIsVisible
    };
  };
};

const makeMapDispatchToProps = (): MapDispatchToProps => {
  return (dispatch: Dispatch<Action>, { ID }: Props): TagPanelFuncProp => {
    return {
      onTagTraceVisbileCheckboxInput: onTagTraceVisbileCheckboxInput(
        dispatch,
        ID
      ),
      onAppearsAtInput: onAppearsAtInput(dispatch, ID),
      onDisappearsAtInput: onDisappearsAtInput(dispatch, ID)
    };
  };
};

export default connect(
  makeMapStateToProps,
  makeMapDispatchToProps
)(TagPanel);
