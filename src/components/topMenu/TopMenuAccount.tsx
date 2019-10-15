import React from "react";

const TopMenuAccount: React.FC = () => {
    return (
          <li className="nav-item dropdown no-arrow">
            <a className="nav-link dropdown-toggle"
              href="index.html" id="userDropdown" role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false">
              <span className="mr-2 d-none d-lg-inline text-gray-600 small">Valerie Luna</span>
              <img className="img-profile rounded-circle" alt=""
                src="https://source.unsplash.com/QAB-WJcbgJk/60x60" />
            </a>
          </li>
    );
};

export default TopMenuAccount;
