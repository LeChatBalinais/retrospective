import React from 'react';

interface Props {
  name: string;
  start: number;
  end: number;
  traceIsVisible: boolean;
  onTagTraceVisbileCheckboxInput: (visible: boolean) => void;
}
const TagPanelComponent = ({
  name,
  start,
  end,
  traceIsVisible,
  onTagTraceVisbileCheckboxInput
}: Props): JSX.Element => {
  return (
    /* eslint-disable-next-line */
    <div className="box">
      <div className="box">{name}</div>
      <div className="box">
        <span>Start at: {start}</span>
        <span>End at: {end} </span>
      </div>
      <div className="box">
        <input
          type="checkbox"
          {...{ checked: traceIsVisible, value: 'Trace Is Visible' }}
          onChange={(event: React.ChangeEvent<HTMLInputElement>): void => { onTagTraceVisbileCheckboxInput(event.target.checked); }}
        />
        Trace is Visible
      </div>
    </div>
  );
};

export default TagPanelComponent;
