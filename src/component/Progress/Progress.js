import React from "react";

import classes from "./Progress.module.css";

const Progress = () => {
  return (
    <div className={classes.ProgressContainer}>
      <div className={classes.StepContainer}>
        <div className={classes.Step}>
          <div className={`${classes.StepBox} ${classes.DoneStepBox}`}></div>
          <p className={`${classes.StepTitle} ${classes.DoneStepTitle}`}>Asset details</p>
        </div>
        <div className={classes.StepStrikeContainer}>
          <div className={`${classes.StepStrike} ${classes.DoneStepStrike}`}></div>
          <div className={`${classes.StepStrike} ${classes.DoneStepStrike}`}></div>
        </div>
      </div>
      <div className={classes.StepContainer}>
        <div className={classes.Step}>
          <div className={classes.StepBox}></div>
          <p className={classes.StepTitle}>Revenue details</p>
        </div>
        <div className={classes.StepStrikeContainer}>
          <div className={classes.StepStrike}></div>
          <div className={classes.StepStrike}></div>
        </div>
      </div>
      <div className={classes.StepContainer}>
        <div className={classes.Step}>
          <div className={classes.StepBox}></div>
          <p className={classes.StepTitle}>Documentation</p>
        </div>
        <div className={classes.StepStrikeContainer}>
          <div className={classes.StepStrike}></div>
          <div className={classes.StepStrike}></div>
        </div>
      </div>
      <div className={classes.StepContainer}>
        <div className={classes.Step}>
          <div className={classes.StepBox}></div>
          <p className={classes.StepTitle}>Gallery</p>
        </div>
      </div>
    </div>
  );
};

export default Progress;
