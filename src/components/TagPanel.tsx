import React from 'react';

export interface ValueProps {
  name: string;
  start?: number;
  end?: number;
  traceIsVisible: boolean;
}

export interface FuncProps {
  onTagTraceVisbileCheckboxInput: (visible: boolean) => void;
}

export type Props = ValueProps & FuncProps;

export const TagPanel = ({
  name,
  start,
  end,
  traceIsVisible,
  onTagTraceVisbileCheckboxInput
}: Props): JSX.Element => {
  return (
    /* eslint-disable-next-line */
    <div className="columns">
      <div className="column">{name}</div>
      <div className="column">
        <span>Start at: {start.toFixed(2)}</span>
      </div>
      <div className="column">
        <span>End at: {end.toFixed(2)} </span>
      </div>
      <div className="column">
        <span>
          <input
            type="checkbox"
            {...{ checked: traceIsVisible, value: 'Trace Is Visible' }}
            onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
              onTagTraceVisbileCheckboxInput(event.target.checked);
            }}
          />
          Trace is Visible
        </span>
      </div>
    </div>
  );
};