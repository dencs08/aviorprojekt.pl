import React from "react";
import { Ri3MenuLine, RiCloseLin } from "react-icons/ri";

import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links__logo">
          <img src="{logo}" alt="aviorprojekt logo" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
