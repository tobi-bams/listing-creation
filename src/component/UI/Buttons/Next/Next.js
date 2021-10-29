import React from "react";

import classes from "./Next.module.css";
import WhiteArrowRight from "../../../../assets/WhiteArrowRight.svg";

const Next = (props) => {

  const onNextEventHandler = () => {
    if(props.currentStep < 4) {
      props.setCurrentStep(props.currentStep + 1);
    }
  }
  return (
    <button className={classes.NextButton} onClick={onNextEventHandler}>
      Next step{" "}
      <img src={WhiteArrowRight} alt="Arrow" className={classes.NextArrow} />
    </button>
  );
};

export default Next;
