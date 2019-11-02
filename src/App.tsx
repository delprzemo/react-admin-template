import React from "react";
import "./App.css";
import "./styles/sb-admin-2.min.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Login from "./components/account/Login";
import Admin from "./components/Admin";
import { PrivateRoute } from "./common/elements/PrivateRoute";
import { AccountRoute } from "./common/elements/AccountRoute";

const App: React.FC = () => {
  return (
    <div className="App" id="wrapper">

      <Router>
        <Switch>
          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>
          <AccountRoute path="/login"><Login /></AccountRoute>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
