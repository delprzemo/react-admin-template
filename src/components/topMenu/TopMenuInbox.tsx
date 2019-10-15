import React from "react";

const TopMenuInbox: React.FC = () => {
    return (
          <li className="nav-item dropdown no-arrow mx-1">
            <a className="nav-link dropdown-toggle" href="index.html" id="messagesDropdown"
              role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fas fa-envelope fa-fw"></i>
              <span className="badge badge-danger badge-counter">7</span>
            </a>
          </li>
    );
};

export default TopMenuInbox;
