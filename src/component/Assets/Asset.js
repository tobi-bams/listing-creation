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
  const [title, setTitle] = useState("");
  const [description, setDiscription] = useState("");
  const [minInvestAmount, setMinInvestAmount] = useState("");
  const [capitalStack, setCapitalStack] = useState("");
  const [softCap, setSoftCap] = useState("");
  const [hardCap, setHardCap] = useState("");

  const titleOnChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const descriptionOnChangeHandler = (e) => {
    setDiscription(e.target.value);
  };

  const minInvestAmountOnChangeHandler = (e) => {
    setMinInvestAmount(e.target.value);
  };

  const capitalStackOnChangeHandler = (e) => {
    setCapitalStack(e.target.value);
  };

  const softCapOnChangeHandler = (e) => {
    setSoftCap(e.target.value);
  };

  const hardCapOnChangeHandler = (e) => {
    setHardCap(e.target.value);
  };
  return (
    <div className={classes.AssetContainer}>
      <div className={classes.AssetHeaderContainer}>
        <h2 className={classes.AssetHeader}>Asset details</h2>
        <p className={classes.AssetDescription}>
          Welcome to the United Properties, we are glad to see you! Let’s get
          started by entering some asset details
        </p>
      </div>
      <Input
        label="Asset title"
        onChange={titleOnChangeHandler}
        value={title}
      />
      <Input
        label="Description (max. 72 symbols)"
        value={description}
        onChange={descriptionOnChangeHandler}
      />
      <Dropdown
        label="Asset location"
        items={locations}
        selectedItem={location}
        setSelectedItem={setLocation}
      />
      <div className={classes.SideBySide}>
        <Input
          label="Minimum investment amount"
          value={minInvestAmount}
          onChange={minInvestAmountOnChangeHandler}
        />
        <Input
          label="Capital stack"
          value={capitalStack}
          onChange={capitalStackOnChangeHandler}
        />
      </div>
      <div className={classes.SideBySide}>
        <Input
          label="Soft cap"
          value={softCap}
          onChange={softCapOnChangeHandler}
        />
        <Input
          label="Hard cap"
          value={hardCap}
          onChange={hardCapOnChangeHandler}
        />
      </div>
    </div>
  );
};

export default Asset;
