import React from "react";

import classes from "./SideBar.module.css";

import Logo from "../../assets/logo.svg";
import Progress from "../Progress/Progress";
import Quote from "../Quote/Quote";
import Model from "../../assets/model.png";
const SideBar = (props) => {
  return (
    <div
      className={classes.SideBarContainer}
      style={{
        backgroundImage: `${
          props.currentStep === 5 ? "url(" + Model + ")" : ""
        }`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {props.currentStep === 5 ? (
        <div className={classes.AbsoluteColor}></div>
      ) : (
        ""
      )}

      <div className={classes.LogoContainer}>
        <img src={Logo} className={classes.Logo} alt="Alt" />
      </div>
      {props.currentStep < 5 ? (
        <Progress currentStep={props.currentStep} />
      ) : (
        ""
      )}

      <Quote currentStep={props.currentStep} />
    </div>
  );
};

export default SideBar;
