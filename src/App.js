import React from "react";
import "./styles.css";

import SideBar from "./component/SideBar/SideBar";
import MainContent from "./component/MainContentContainer/MainContentContainer";
import Header from "./component/Header/Header";
import Asset from "./component/Assets/Asset";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <div>
      <SideBar />
      <MainContent>
        <Header />
        <Asset />
        <Footer />
      </MainContent>
    </div>
  );
}

export default App;
