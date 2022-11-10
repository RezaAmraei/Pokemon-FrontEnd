import React from "react";
import "../CSS/Navbar.css";
const NavBar = () => {
  return (
    <div className="navbar">
      <span>PokeDex</span>
      <div className="links">
        <a href="/home">Home</a>
        <a href="/battle">Battle</a>
        <a href="/Build">Build</a>
        <a href="/about">About</a>
      </div>
    </div>
  );
};

export default NavBar;
