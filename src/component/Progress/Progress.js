import React from "react";

import classes from "./Progress.module.css";

const Progress = (props) => {
  return (
    <div className={classes.ProgressContainer}>
      <div className={classes.StepContainer}>
        <div className={classes.Step}>
          <div className={`${classes.StepBox} ${classes.DoneStepBox}`}></div>
          <p className={`${classes.StepTitle} ${classes.DoneStepTitle}`}>
            Asset details
          </p>
        </div>
        <div className={classes.StepStrikeContainer}>
          <div
            className={`${classes.StepStrike} ${classes.DoneStepStrike}`}
          ></div>
          <div
            className={`${classes.StepStrike} ${classes.DoneStepStrike}`}
          ></div>
        </div>
      </div>
      <div className={classes.StepContainer}>
        <div className={classes.Step}>
          <div
            className={`${classes.StepBox} ${
              props.currentStep > 1 ? classes.DoneStepBox : ""
            }`}
          ></div>
          <p
            className={`${classes.StepTitle} ${
              props.currentStep > 1 ? classes.DoneStepTitle : ""
            }`}
          >
            Revenue details
          </p>
        </div>
        <div className={classes.StepStrikeContainer}>
          <div
            className={`${classes.StepStrike} ${
              props.currentStep > 1 ? classes.DoneStepStrike : ""
            }`}
          ></div>
          <div
            className={`${classes.StepStrike} ${
              props.currentStep > 1 ? classes.DoneStepStrike : ""
            }`}
          ></div>
        </div>
      </div>
      <div className={classes.StepContainer}>
        <div className={classes.Step}>
          <div
            className={`${classes.StepBox} ${
              props.currentStep > 2 ? classes.DoneStepBox : ""
            }`}
          ></div>
          <p
            className={`${classes.StepTitle} ${
              props.currentStep > 2 ? classes.DoneStepTitle : ""
            }`}
          >
            Documentation
          </p>
        </div>
        <div className={classes.StepStrikeContainer}>
          <div
            className={`${classes.StepStrike} ${
              props.currentStep > 2 ? classes.DoneStepStrike : ""
            }`}
          ></div>
          <div
            className={`${classes.StepStrike} ${
              props.currentStep > 2 ? classes.DoneStepStrike : ""
            }`}
          ></div>
        </div>
      </div>
      <div className={classes.StepContainer}>
        <div className={classes.Step}>
          <div
            className={`${classes.StepBox} ${
              props.currentStep > 3 ? classes.DoneStepBox : ""
            }`}
          ></div>
          <p
            className={`${classes.StepTitle} ${
              props.currentStep > 3 ? classes.DoneStepTitle : ""
            }`}
          >
            Gallery
          </p>
        </div>
      </div>
    </div>
  );
};

export default Progress;
