import React from "react";

import classes from "./Back.module.css";
import BlueArrowLeft from "../../../../assets/BlueArrowLeft.svg";

const Back = (props) => {
  const onPreviousHandler = () => {
    if (props.currentStep > 1) {
      props.setCurrentStep(props.currentStep - 1);
    }
  };
  return (
    <div className={classes.BackContainer} onClick={onPreviousHandler}>
      <img src={BlueArrowLeft} alt="Arrow" className={classes.ArrowLeft} />
      <p className={classes.BackText}>Back to the homepage</p>
    </div>
  );
};

export default Back;
