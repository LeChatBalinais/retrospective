import React from 'react';
import { connect } from 'react-redux';
import TagPanelComponent from '../components/TagPanel';
import { State } from '../types/state';
import { setTagTraceVisible } from '../actions/actionCreators';
import store from '../store';

interface Props {
  ID?: string;
  start?: number;
  end?: number;
  traceIsVisible?: boolean;
}


const onTagTraceVisbileCheckboxInput = (
  tagID: string
): (visible: boolean) => void => {

  return (visible: boolean): void => {
    store.dispatch(setTagTraceVisible(tagID, visible));
  };
}


const TagPanelContainer = ({ ID, start, end, traceIsVisible }: Props): JSX.Element => {
  if (ID === undefined) return null;

  return (
    <TagPanelComponent
      {...{
        name: ID,
        start,
        end,
        traceIsVisible,
        onTagTraceVisbileCheckboxInput: onTagTraceVisbileCheckboxInput(ID)
      }}
    />
  );
};

const mapStateToProps = ({ currentTag, tags: { byID }, visibleTraceTags }: State): Props => {
  if (currentTag === undefined)
    return {
      ID: currentTag
    };

  return {
    ID: currentTag,
    start: byID[currentTag].start,
    end: byID[currentTag].path[byID[currentTag].path.length - 1].time,
    traceIsVisible: visibleTraceTags.includes(currentTag)
  };
};

export default connect(mapStateToProps)(TagPanelContainer);
