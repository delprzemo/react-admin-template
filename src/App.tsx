import React from "react";
import "./App.css";
import "./styles/sb-admin-2.min.css";
import LeftMenu from "./components/LeftMenu";
import TopMenu from "./components/topMenu/TopMenu";
import Home from "./components/Home";
import Products from "./components/products/Products";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="App" id="wrapper">
      <Router>
        <LeftMenu />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <TopMenu />
            <div className="container-fluid">
              <Switch>
                <Route path="/products"><Products /></Route>
                <Route path="/"><Home /></Route>
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
