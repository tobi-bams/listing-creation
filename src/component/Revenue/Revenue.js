import React, { useState } from "react";

import classes from "./Revenue.module.css";

import Dropdown from "../UI/Dropdown/Dropdown";
import Input from "../UI/Input/Input";

const Revenue = () => {
  const projectTypes = ["Operating", "Standard"];
  const assetStructures = ["Equity", "Standard"];
  const revenueTypes = ["Interest Revenue", "Equity Revenue"];
  const distributions = ["Numerical", "Alphabetical"];
  const investmentPeriods = ["1 Year", "2 Years", "3 Years"];
  const expectedReturns = ["5%", "5.5%", "6%", "6.5%", "7%"];

  const [projectType, setProjectType] = useState("");
  const [assetStructure, setAssetStructure] = useState("");
  const [revenueType, setRevenueType] = useState("");
  const [distribution, setDistribution] = useState("");
  const [investmentPeriod, setInvestmentPeriod] = useState("");
  const [expectedReturn, setExpectedReturn] = useState("");
  return (
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
        <Input label="Lunch Date" type="date"/>
        <Input label="Expected Closing" type="date"/>
      </div>
    </div>
  );
};

export default Revenue;
