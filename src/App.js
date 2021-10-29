import React, { useState } from "react";
import "./styles.css";

import SideBar from "./component/SideBar/SideBar";
import MainContent from "./component/MainContentContainer/MainContentContainer";
import Header from "./component/Header/Header";
import Asset from "./component/Assets/Asset";
import Footer from "./component/Footer/Footer";
import Revenue from "./component/Revenue/Revenue";

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div>
      <SideBar currentStep={currentStep} />
      <MainContent>
        <Header currentStep={currentStep} />
        {currentStep === 1 ? <Asset /> : ""}
        {currentStep === 2 ? <Revenue /> : ""}
        <Footer currentStep={currentStep} setCurrentStep={setCurrentStep} />
      </MainContent>
    </div>
  );
}

export default App;
