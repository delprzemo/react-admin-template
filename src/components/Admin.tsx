import React, { Fragment } from "react";
import LeftMenu from "./LeftMenu";
import TopMenu from "./topMenu/TopMenu";
import { Switch, Route, useRouteMatch, match } from "react-router";
import Users from "./users/Users";
import Products from "./products/Products";
import Orders from "./orders/Orders";
import Home from "./Home";
import Notifications from "../common/elements/Notification";

const Admin: React.FC = () => {
  let match: match<{}>  = useRouteMatch() as match<{}> ;

  return (
    <Fragment>
      <Notifications />
      <LeftMenu />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <TopMenu />
          <div className="container-fluid">
            <Switch>
              <Route path={`${match.path}/users`}><Users /></Route>
              <Route path={`${match.path}/products`}><Products /></Route>
              <Route path={`${match.path}/orders`}><Orders /></Route>
              <Route path="/"><Home /></Route>
            </Switch>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Admin;
