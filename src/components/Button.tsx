import React from 'react';

export interface ValueProps {
  caption: string;
}

export interface FuncProps {
  onPress?: () => void;
}
export type Props = ValueProps & FuncProps;

const Button = ({ caption, onPress }: Props): JSX.Element => (
  <button onClick={onPress} type="button">
    {caption}
  </button>
);

export default Button;
