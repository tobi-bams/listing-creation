import React from "react";

import classes from "./Back.module.css";
import BlueArrowLeft from "../../../../assets/BlueArrowLeft.svg";

const Back = () => {
  return (
    <div className={classes.BackContainer}>
      <img src={BlueArrowLeft} alt="Arrow" className={classes.ArrowLeft} />
      <p className={classes.BackText}>Back to the homepage</p>
    </div>
  );
};

export default Back;
