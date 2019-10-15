import React from "react";
import TopMenuAccount from "./TopMenuAccount";
import TopMenuInbox from "./TopMenuInbox";

const TopMenu: React.FC = () => {
    return (
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

        <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
          <i className="fa fa-bars"></i>
        </button>

        <ul className="navbar-nav ml-auto">
          <TopMenuInbox/>
          <div className="topbar-divider d-none d-sm-block"></div>
          <TopMenuAccount/>
        </ul>
      </nav>
    );
};

export default TopMenu;
