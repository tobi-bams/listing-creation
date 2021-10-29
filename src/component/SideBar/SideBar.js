import React from "react";

import classes from "./SideBar.module.css";

import Logo from "../../assets/logo.svg";
import Progress from "../Progress/Progress";
import Quote from "../Quote/Quote";
const SideBar = (props) => {
  return (
    <div className={classes.SideBarContainer}>
      <div className={classes.LogoContainer}>
        <img src={Logo} className={classes.Logo} alt="Alt" />
      </div>
      <Progress currentStep={props.currentStep} />
      <Quote />
    </div>
  );
};

export default SideBar;
