import React from "react";
import "../CSS/Navbar.css";
import HamburgerNavBar from "./HamburgerNavBar";
const NavBar = ({ types }) => {
  return (
    <div className="navbar">
      <div className="mobileMenu">
        <HamburgerNavBar types={types} />
      </div>
      <span className={types ? types[0] : ""}>PokeDex</span>
      <div className="links">
        <span className={types ? `linksSpan ${types[1]}` : "linksSpan"}>
          Home
        </span>
        <span className={types ? `linksSpan ${types[1]}` : "linksSpan"}>
          Battle
        </span>
        <span className={types ? `linksSpan ${types[1]}` : "linksSpan"}>
          Build
        </span>
        <span className={types ? `linksSpan ${types[1]}` : "linksSpan"}>
          About
        </span>
      </div>
    </div>
  );
};

export default NavBar;
