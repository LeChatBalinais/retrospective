// @flow
import React from 'react';

type Props = {
  caption: string,
  onPress: void => void
};

const Button = ({ caption, onPress }: Props) => (
  <button onClick={onPress} type="button">
    {caption}
  </button>
);
export default Button;
