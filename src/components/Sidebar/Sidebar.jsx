import React from "react";
import { Home, User, Settings } from "react-feather";

import logo from "assets/images/mondayjob.png";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <img src={logo} alt="MondayJob" className="logo" />
      <ul>
        <li>
          <a href="#!" className=" nav-link active">
            <Home />
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="#!" className="nav-link">
            <User />
            <span>Profile</span>
          </a>
        </li>
        <li>
          <a href="#!" className="nav-link">
            <Settings />
            <span>Setting</span>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
