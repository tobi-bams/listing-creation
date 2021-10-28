import React, { useState } from "react";

import classes from "./Asset.module.css";

import Input from "../UI/Input/Input";
import Dropdown from "../UI/Dropdown/Dropdown";

const Asset = () => {
  const locations = [
    "Lagos",
    "Abuja",
    "Kaduna",
    "Ibadan",
    "Osun",
    "Enugu",
    "Imo",
    "Kano",
  ];

  const [location, setLocation] = useState("");
  return (
    <div className={classes.AssetContainer}>
      <div className={classes.AssetHeaderContainer}>
        <h2 className={classes.AssetHeader}>Asset details</h2>
        <p className={classes.AssetDescription}>
          Welcome to the United Properties, we are glad to see you! Let’s get
          started by entering some asset details
        </p>
      </div>
      <Input label="Asset title" />
      <Input label="Description (max. 72 symbols)" />
      <Dropdown
        label="Asset location"
        items={locations}
        selectedItem={location}
        setSelectedItem={setLocation}
      />
      <div className={classes.SideBySide}>
        <Input label="Minimum investment amount" />
        <Input label="Capital stack" />
      </div>
      <div className={classes.SideBySide}>
        <Input label="Soft cap" />
        <Input label="Hard cap" />
      </div>
    </div>
  );
};

export default Asset;
