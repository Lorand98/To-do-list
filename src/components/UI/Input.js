import classes from './Input.module.css';
import React from 'react';

const Input = React.forwardRef((props, itemTextRef) => {
  return (
    <input
      className={classes['item-input']}
      placeholder={props.placeholder}
      ref={itemTextRef}
      required
    />
  );
});

export default Input;
