import React from 'react';

interface Props {
  caption: string;
  onPress: () => void;
}

const Button = ({ caption, onPress }: Props): JSX.Element => (
  <button onClick={onPress} type="button">
    {caption}
  </button>
);
export default Button;
