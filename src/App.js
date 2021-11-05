import React, { useState } from "react";
import "./styles.css";

import SideBar from "./component/SideBar/SideBar";
import MainContent from "./component/MainContentContainer/MainContentContainer";
import Header from "./component/Header/Header";
import Asset from "./component/Assets/Asset";
import Revenue from "./component/Revenue/Revenue";
import Documentation from "./component/Documentation/Documentation";
import Gallary from "./component/Gallary/Gallary";
import Confirmation from "./component/Confirmation/Confirmation";

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
  documentationFolderName: "",
  documentationFiles: [],
  gallaryFolderName: "",
  gallaryFiles: [],
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

        {currentStep === 3 ? (
          <Documentation
            allData={allData}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            setAllData={setAllData}
          />
        ) : (
          ""
        )}

        {currentStep === 4 ? (
          <Gallary
            allData={allData}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            setAllData={setAllData}
          />
        ) : (
          ""
        )}
        {currentStep === 5 ? (
          <Confirmation
            allData={allData}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
          />
        ) : (
          ""
        )}
      </MainContent>
    </div>
  );
}

export default App;
