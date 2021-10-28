import React, { useState } from "react";

import classes from "./Input.module.css";

const Input = (props) => {
  const [isFocus, setIsFocus] = useState(false);
  const onFocusHandler = () => {
    setIsFocus(true);
  };

  const onBurlHandler = () => {
    setIsFocus(false);
  };
  return (
    <div className={classes.InputContainer}>
      <label
        className={`${classes.InputLabel} ${
          isFocus ? classes.FocusInputLabel : ""
        }`}
      >
        {props.label}
      </label>
      <input
        type="text"
        className={classes.Input}
        onFocus={onFocusHandler}
        onBlur={onBurlHandler}
      />
    </div>
  );
};

export default Input;
