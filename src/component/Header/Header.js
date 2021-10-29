import React from "react";

import classes from "./Header.module.css";
import BlueArrowRight from "../../assets/BlueArrowRight.svg";

const Header = (props) => {
  return (
    <div className={classes.HeaderContainer}>
      <p className={classes.Step}>{`STEP ${props.currentStep} OF 4`}</p>
      <div className={classes.HelpContainer}>
        <p className={classes.Question}>Lost or have trouble?</p>
        <a href="/" className={classes.Link}>
          Get help{"  "}
          <img src={BlueArrowRight} className={classes.Arrow} alt="Arrow" />
        </a>
      </div>
    </div>
  );
};

export default Header;
