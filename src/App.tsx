import React from "react";
import "./App.css";
import "./styles/sb-admin-2.min.css";
import LeftMenu from "./components/LeftMenu";
import TopMenu from "./components/topMenu/TopMenu";
import Home from "./components/Home";
import Products from "./components/products/Products";
import Notifications from "./common/elements/Notifications";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/account/Login";
import Admin from "./components/Admin";
import { PrivateRoute } from "./common/elements/PrivateRoute";

const App: React.FC = () => {
  return (
    <div className="App" id="wrapper">

      <Router>
        <Switch>
          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>
          <Route path="/login"><Login /></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
