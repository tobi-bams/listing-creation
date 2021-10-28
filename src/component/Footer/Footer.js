import React from "react";

import classes from "./Footer.module.css";

import Back from "../UI/Buttons/Back/Back";
import Skip from "../UI/Buttons/Skip/Skip";
import Next from "../UI/Buttons/Next/Next";

const Footer = () => {
  return (
    <div className={classes.FooterContainer}>
      <Back />
      <div>
        <Skip />
        <Next />
      </div>
    </div>
  );
};

export default Footer;
