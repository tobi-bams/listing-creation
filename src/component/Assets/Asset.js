import React, { useState } from "react";

import classes from "./Asset.module.css";

import Input from "../UI/Input/Input";
import Dropdown from "../UI/Dropdown/Dropdown";
import Footer from "../Footer/Footer";

const Asset = (props) => {
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

  const [location, setLocation] = useState(props.allData.location);
  const [title, setTitle] = useState(props.allData.title);
  const [description, setDiscription] = useState(props.allData.description);
  const [minInvestAmount, setMinInvestAmount] = useState(
    props.allData.minInvestAmount
  );
  const [capitalStack, setCapitalStack] = useState(props.allData.capitalStack);
  const [softCap, setSoftCap] = useState(props.allData.softCap);
  const [hardCap, setHardCap] = useState(props.allData.hardCap);

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

  const onNextEventHandler = () => {
    if (props.currentStep < 4) {
      props.setAllData((data) => {
        return {
          ...data,
          title,
          location,
          description,
          minInvestAmount,
          capitalStack,
          softCap,
          hardCap,
        };
      });
      props.setCurrentStep(props.currentStep + 1);
    }
  };

  const onBackEventHandler = () => {
    if (props.currentStep > 1) {
      props.setCurrentStep(props.currentStep - 1);
    }
  };
  return (
    <>
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
          type="text"
        />
        <Input
          label="Description (max. 72 symbols)"
          value={description}
          onChange={descriptionOnChangeHandler}
          type="text"
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
            type="text"
          />
          <Input
            label="Capital stack"
            value={capitalStack}
            onChange={capitalStackOnChangeHandler}
            type="text"
          />
        </div>
        <div className={classes.SideBySide}>
          <Input
            label="Soft cap"
            value={softCap}
            onChange={softCapOnChangeHandler}
            type="text"
          />
          <Input
            label="Hard cap"
            value={hardCap}
            onChange={hardCapOnChangeHandler}
            type="text"
          />
        </div>
      </div>
      <Footer
        onClickNext={onNextEventHandler}
        onClickBack={onBackEventHandler}
      />
    </>
  );
};

export default Asset;
