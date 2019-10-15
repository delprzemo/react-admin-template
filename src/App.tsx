import React from "react";
import "./App.css";
import "./styles/sb-admin-2.min.css";
import LeftMenu from "./components/LeftMenu";
import TopMenu from "./components/topMenu/TopMenu";
import Home from "./components/Home";

const App: React.FC = () => {
  return (
    <div className="App" id="wrapper">
      <LeftMenu />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <TopMenu />
          <div className="container-fluid">
            <Home/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
