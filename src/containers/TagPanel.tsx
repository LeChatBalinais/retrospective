import { Dispatch } from 'react';
import { connect } from 'react-redux';
import {
  ValueProps as TagPanelValueProp,
  FuncProps as TagPanelFuncProp,
  TagPanel
} from '../components/TagPanel';
import { State } from '../types/state';
import { setTagTraceVisible } from '../actions/actionCreators';
import { getCurrentTagID } from '../selectors/selectors';
import makeGetTagInfo from '../selectors/get-tag-info';
import { Action } from '../types/action';

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
    dispatch(setTagTraceVisible(ID, visible));
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
      )
    };
  };
};

export default connect(
  makeMapStateToProps,
  makeMapDispatchToProps
)(TagPanel);
