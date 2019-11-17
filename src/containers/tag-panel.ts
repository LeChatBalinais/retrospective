import { connect } from 'react-redux';
import { Dispatch } from '~/utils/dispatch';
import TagPanel, {
  ValueProps as TagPanelValueProp,
  FuncProps as TagPanelFuncProp
} from '~/components/TagPanel';
import { State } from '~/state';
import { actionCreator as tagTraceVisibilityCheckboxToggled } from '~/actions-reducers/ui-current-tag-panel-trace-visibility-checkbox-toggled';
import { actionCreator as tagAppearsAtEditBoxEdited } from '~/actions-reducers/ui-current-tag-panel-appears-at-edited';
import { actionCreator as tagDisappearsAtEditBoxEdited } from '~/actions-reducers/ui-current-tag-panel-disappears-at-edited';
import { getCurrentTagID, getVisibleTraceTagIDs } from '~/getters/tag-editor';
import { getPointTagAppearsAt } from '~/selectors/get-point-tag-appears-at';
import { getPointTagDisappearsAt } from '~/selectors/get-point-tag-disappears-at';

interface Props {
  ID: string;
}

type MapDispatchToProps = (
  dispatch: Dispatch,
  { ID }: Props
) => TagPanelFuncProp;

type MapStateToProps = (state: State) => TagPanelValueProp;

const getTimeTagAppearsAt = (state: State, ID: string): number => {
  const { time } = getPointTagAppearsAt(state, ID);
  return time;
};

const getTimeTagDisappearsAt = (state: State, ID: string): number => {
  const { time } = getPointTagDisappearsAt(state, ID);
  return time;
};

const isTagTraceVisible = (state: State, ID: string): boolean => {
  return getVisibleTraceTagIDs(state).includes(ID);
};

const onTagTraceVisbileCheckboxInput = (
  dispatch: Dispatch,
  ID: string
): ((visible: boolean) => void) => {
  return (visible: boolean): void => {
    dispatch(tagTraceVisibilityCheckboxToggled({ tagID: ID, visible }));
  };
};

const onAppearsAtInput = (
  dispatch: Dispatch,
  ID: string
): ((visible: number) => void) => {
  return (time: number): void => {
    dispatch(tagAppearsAtEditBoxEdited({ tagID: ID, time }));
  };
};

const onDisappearsAtInput = (
  dispatch: Dispatch,
  ID: string
): ((visible: number) => void) => {
  return (time: number): void => {
    dispatch(tagDisappearsAtEditBoxEdited({ tagID: ID, time }));
  };
};

const makeMapStateToProps = (): MapStateToProps => {
  return (state: State): TagPanelValueProp => {
    const ID = getCurrentTagID(state);
    return {
      name: ID,
      start: getTimeTagAppearsAt(state, ID),
      end: getTimeTagDisappearsAt(state, ID),
      traceIsVisible: isTagTraceVisible(state, ID)
    };
  };
};

const makeMapDispatchToProps = (): MapDispatchToProps => {
  return (dispatch: Dispatch, { ID }: Props): TagPanelFuncProp => {
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
