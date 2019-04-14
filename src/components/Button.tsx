import React from 'react';

const Button = ({ caption, onPress }) => (
  <button onClick={onPress} type="button">
    {caption}
  </button>
);
export default Button;
