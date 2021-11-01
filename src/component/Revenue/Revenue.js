import React, { useState } from "react";

import classes from "./Revenue.module.css";

import Dropdown from "../UI/Dropdown/Dropdown";
import Input from "../UI/Input/Input";
import Footer from "../Footer/Footer";

const Revenue = (props) => {
  const projectTypes = ["Operating", "Standard"];
  const assetStructures = ["Equity", "Standard"];
  const revenueTypes = ["Interest Revenue", "Equity Revenue"];
  const distributions = ["Numerical", "Alphabetical"];
  const investmentPeriods = ["1 Year", "2 Years", "3 Years"];
  const expectedReturns = ["5%", "5.5%", "6%", "6.5%", "7%"];

  const [projectType, setProjectType] = useState(props.allData.projectType);
  const [assetStructure, setAssetStructure] = useState(
    props.allData.assetStructure
  );
  const [revenueType, setRevenueType] = useState(props.allData.revenueType);
  const [distribution, setDistribution] = useState(props.allData.distribution);
  const [investmentPeriod, setInvestmentPeriod] = useState(
    props.allData.investmentPeriod
  );
  const [expectedReturn, setExpectedReturn] = useState(
    props.allData.expectedReturn
  );
  const [lunchDate, setLunchDate] = useState(props.allData.lunchDate);
  const [closingDate, setClosingDate] = useState(props.allData.closingDate);

  const lunchDateOnChangeHandler = (e) => {
    setLunchDate(e.target.value);
  };

  const closingDateOnChangeHandler = (e) => {
    setClosingDate(e.target.value);
  };

  const onNextEventHandler = () => {
    if (props.currentStep < 4) {
      props.setAllData((data) => {
        return {
          ...data,
          projectType,
          assetStructure,
          revenueType,
          distribution,
          investmentPeriod,
          expectedReturn,
          lunchDate,
          closingDate,
        };
      });
      props.setCurrentStep(props.currentStep + 1);
    }
  };

  const onBackEventHandler = () => {
    if (props.currentStep > 1) {
      props.setAllData((data) => {
        return {
          ...data,
          projectType,
          assetStructure,
          revenueType,
          distribution,
          investmentPeriod,
          expectedReturn,
          closingDate,
          lunchDate,
        };
      });
      props.setCurrentStep(props.currentStep - 1);
    }
  };
  return (
    <>
      <div className={classes.RevenueContainer}>
        <div className={classes.RevenueHeaderContainer}>
          <h2 className={classes.RevenueHeader}>Revenue details</h2>
          <p className={classes.RevenueDescription}>
            Show investors your conditions defining the entry threshold and the
            desired, achievable result you want to arrive at
          </p>
        </div>
        <div className={classes.SideBySide}>
          <Dropdown
            label="Project Type"
            selectedItem={projectType}
            setSelectedItem={setProjectType}
            items={projectTypes}
          />
          <Dropdown
            label="Asset Structure"
            selectedItem={assetStructure}
            setSelectedItem={setAssetStructure}
            items={assetStructures}
          />
        </div>
        <div className={classes.SideBySide}>
          <Dropdown
            label="Revenue Type"
            selectedItem={revenueType}
            setSelectedItem={setRevenueType}
            items={revenueTypes}
          />
          <Dropdown
            label="Distribution"
            selectedItem={distribution}
            setSelectedItem={setDistribution}
            items={distributions}
          />
        </div>
        <div className={classes.SideBySide}>
          <Dropdown
            label="Target Investment Period"
            selectedItem={investmentPeriod}
            setSelectedItem={setInvestmentPeriod}
            items={investmentPeriods}
          />
          <Dropdown
            label="Projected Return"
            selectedItem={expectedReturn}
            setSelectedItem={setExpectedReturn}
            items={expectedReturns}
          />
        </div>
        <div className={classes.SideBySide}>
          <Input
            label="Lunch Date"
            type="date"
            value={lunchDate}
            onChange={lunchDateOnChangeHandler}
          />
          <Input
            label="Expected Closing"
            type="date"
            value={closingDate}
            onChange={closingDateOnChangeHandler}
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

export default Revenue;
