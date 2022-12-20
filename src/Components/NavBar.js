import React from "react";
import "../CSS/Navbar.css";
import HamburgerNavBar from "./HamburgerNavBar";
import { useNavigate } from "react-router-dom";

const NavBar = ({ types }) => {
  const navigate = useNavigate();
  function navbarLinks(link) {
    navigate(`/${link}`);
  }
  return (
    <div className="navbar">
      <div className="mobileMenu">
        <HamburgerNavBar types={types} />
      </div>
      <span className={types ? types[0] : ""}>PokeDex</span>
      <div className="links">
        <span
          className={types ? `linksSpan ${types[1]}` : "linksSpan"}
          onClick={() => navbarLinks("")}
        >
          Home
        </span>
        <span
          className={types ? `linksSpan ${types[1]}` : "linksSpan"}
          onClick={() => navbarLinks("battle")}
        >
          Battle
        </span>
        <span
          className={types ? `linksSpan ${types[1]}` : "linksSpan"}
          onClick={() => navbarLinks("build")}
        >
          Build
        </span>
        <span
          className={types ? `linksSpan ${types[1]}` : "linksSpan"}
          onClick={() => navbarLinks("about")}
        >
          About
        </span>
      </div>
    </div>
  );
};

export default NavBar;
