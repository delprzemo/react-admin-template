import React from "react";
import { Link, useRouteMatch, match } from "react-router-dom";

const LeftMenu: React.FC = () => {
    let match: match<{}> = useRouteMatch() as match<{}>;

    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </a>

            <hr className="sidebar-divider my-0" />

            <li className="nav-item active">

                <Link className="nav-link" to="Home">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span>
                </Link>
            </li>

            <hr className="sidebar-divider" />
            <div className="sidebar-heading">
                Warehouse
            </div>

            <li className="nav-item">
                <Link className="nav-link" to={`${match.url}/products`}>
                    <i className="fas fa-fw fa-warehouse"></i>
                    <span>Products</span>
                </Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to={`${match.url}/orders`}>
                    <i className="fas fa-fw fa-dollar-sign"></i>
                    <span>Orders</span>
                </Link>
            </li>

            <hr className="sidebar-divider" />

            <div className="sidebar-heading">
                Admin
            </div>


            <li className="nav-item">
                <Link className="nav-link" to={`${match.url}/users`}>
                    <i className="fas fa-fw fa-user"></i>
                    <span>Users</span>
                </Link>
            </li>

            <hr className="sidebar-divider d-none d-md-block" />
        </ul>
    );
};

export default LeftMenu;
