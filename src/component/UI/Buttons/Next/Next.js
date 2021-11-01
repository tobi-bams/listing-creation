import React from "react";

import classes from "./Next.module.css";
import WhiteArrowRight from "../../../../assets/WhiteArrowRight.svg";

const Next = (props) => {

  return (
    <button className={classes.NextButton} onClick={props.onClick}>
      Next step{" "}
      <img src={WhiteArrowRight} alt="Arrow" className={classes.NextArrow} />
    </button>
  );
};

export default Next;
