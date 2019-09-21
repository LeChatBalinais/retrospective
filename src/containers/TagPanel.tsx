import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import TagPanel, {
  ValueProps as TagPanelValueProp,
  FuncProps as TagPanelFuncProp
} from '../components/TagPanel';
import { getCurrentTagID } from '../selectors/selectors';
import makeGetTagInfo from '../selectors/get-tag-info';
import { State } from '../types';
import tagTraceVisibilityCheckboxToggled from '~/actions/ui/player/current-tag-panel/tag-trace-visibility-checkbox-toggled';
import tagAppearsAtEditBoxEdited from '~/actions/ui/player/current-tag-panel/tag-appears-at-editbox-edited';
import tagDisappearsAtEditBoxEdited from '~/actions/ui/player/current-tag-panel/tag-disappears-at-editbox-edited';

interface Props {
  ID: string;
}

type MapDispatchToProps = (
  dispatch: Dispatch,
  { ID }: Props
) => TagPanelFuncProp;

type MapStateToProps = (state: State) => TagPanelValueProp;

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
