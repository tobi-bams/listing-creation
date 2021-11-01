import React from "react";

import classes from "./Footer.module.css";

import Back from "../UI/Buttons/Back/Back";
import Skip from "../UI/Buttons/Skip/Skip";
import Next from "../UI/Buttons/Next/Next";

const Footer = (props) => {
  return (
    <div className={classes.FooterContainer}>
      <Back
        onClick={props.onClickBack}
      />
      <div>
        <Skip
          currentStep={props.currentStep}
          setCurrentStep={props.setCurrentStep}
        />
        <Next
          onClick={props.onClickNext}
        />
      </div>
    </div>
  );
};

export default Footer;
