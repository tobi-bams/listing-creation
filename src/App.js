import React from "react";
import "./styles.css";

import SideBar from "./component/SideBar/SideBar";
import MainContent from "./component/MainContentContainer/MainContentContainer";
import Header from "./component/Header/Header";

function App() {
  return (
    <div>
      <SideBar />
      <MainContent>
        <Header />
      </MainContent>
    </div>
  );
}

export default App;
