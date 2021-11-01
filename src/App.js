import React, { useState } from "react";
import "./styles.css";

import SideBar from "./component/SideBar/SideBar";
import MainContent from "./component/MainContentContainer/MainContentContainer";
import Header from "./component/Header/Header";
import Asset from "./component/Assets/Asset";
import Revenue from "./component/Revenue/Revenue";

const allDataHolder = {
  title: "",
  description: "",
  location: "",
  minInvestAmount: "",
  capitalStack: "",
  softCap: "",
  hardCap: "",
  projectType: "",
  assetStructure: "",
  revenueType: "",
  distribution: "",
  investmentPeriod: "",
  expectedReturn: "",
  lunchDate: "",
  closingDate: "",
};

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [allData, setAllData] = useState(allDataHolder);

  return (
    <div>
      <SideBar currentStep={currentStep} />
      <MainContent>
        <Header currentStep={currentStep} />
        {currentStep === 1 ? (
          <Asset
            allData={allData}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            setAllData={setAllData}
          />
        ) : (
          ""
        )}
        {currentStep === 2 ? (
          <Revenue
            allData={allData}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            setAllData={setAllData}
          />
        ) : (
          ""
        )}
      </MainContent>
    </div>
  );
}

export default App;
