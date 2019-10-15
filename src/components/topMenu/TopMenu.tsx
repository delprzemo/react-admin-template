import React from "react";
import TopMenuAccount from "./TopMenuAccount";
import TopMenuInbox from "./TopMenuInbox";
import "./TopMenu.css";

const TopMenu: React.FC = () => {
  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

        <ol className="breadcrumb white-breadcrumb">
          <li className="breadcrumb-item"><a href="#">Home</a></li>
          <li className="breadcrumb-item"><a href="#">Library</a></li>
          <li className="breadcrumb-item active" aria-current="page">Data</li>
        </ol>

      <ul className="navbar-nav ml-auto">
        <TopMenuInbox />
        <div className="topbar-divider d-none d-sm-block"></div>
        <TopMenuAccount />
      </ul>
    </nav>
  );
};

export default TopMenu;
