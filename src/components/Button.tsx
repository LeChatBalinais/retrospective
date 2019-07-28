import React from 'react';

export interface ValueProps{
  caption: string;
}

export interface FuncProps{
  onPress?: () => void;
}
export type Props = ValueProps & FuncProps;

export const Button = ({ caption, onPress }: Props): JSX.Element => (
  <button onClick={onPress} type="button">
    {caption}
  </button>
);

