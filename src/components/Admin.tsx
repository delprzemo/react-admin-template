import React, { Fragment } from "react";
import LeftMenu from "./LeftMenu";
import TopMenu from "./topMenu/TopMenu";
import { Switch, Route } from "react-router";
import Users from "./users/Users";
import Products from "./products/Products";
import Orders from "./orders/Orders";
import Home from "./Home";
import Notifications from "../common/elements/Notification";

const Admin: React.FC = () => {

  return (
    <Fragment>
      <Notifications />
      <LeftMenu />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <TopMenu />
          <div className="container-fluid">
            <Switch>
              <Route path={`/users`}><Users /></Route>
              <Route path={`/products`}><Products /></Route>
              <Route path={`/orders`}><Orders /></Route>
              <Route path="/"><Home /></Route>
            </Switch>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Admin;
