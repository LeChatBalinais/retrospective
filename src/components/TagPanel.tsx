import React from 'react';

export interface ValueProps {
  name: string;
  start?: number;
  end?: number;
  traceIsVisible: boolean;
}

export interface FuncProps {
  onTagTraceVisbileCheckboxInput: (visible: boolean) => void;
  onAppearsAtInput: (value: number) => void;
  onDisappearsAtInput: (value: number) => void;
}

export type Props = ValueProps & FuncProps;

const TagPanel = ({
  start,
  end,
  traceIsVisible,
  onTagTraceVisbileCheckboxInput,
  onAppearsAtInput,
  onDisappearsAtInput
}: Props): JSX.Element => {
  return (
    /* eslint-disable-next-line */
    <div className="columns">
      <div className="column">
        <span>
          Start at:
          <input
            type="NUMBER"
            step={0.1}
            value={start}
            onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
              onAppearsAtInput(Number(event.target.value));
            }}
          />
        </span>
      </div>
      <div className="column">
        <span>
          End at:{' '}
          <input
            type="NUMBER"
            step={0.1}
            value={end}
            onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
              onDisappearsAtInput(Number(event.target.value));
            }}
          />{' '}
        </span>
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

export default TagPanel;
