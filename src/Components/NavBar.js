import React from "react";
import "../CSS/Navbar.css";
const NavBar = ({ types }) => {
  return (
    <div className="navbar">
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
