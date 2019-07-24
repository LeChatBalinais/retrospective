import React from 'react';

export interface Props {
  caption: string;
  onPress?: () => void;
}

export const Button = ({ caption, onPress }: Props): JSX.Element => (
  <button onClick={onPress} type="button">
    {caption}
  </button>
);

