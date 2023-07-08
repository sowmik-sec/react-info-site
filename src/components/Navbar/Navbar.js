import React from "react";
import ReactIcon from "./react.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-bar">
      <div className="nav-logo">
        <img src={ReactIcon} alt="" width={40} height={40} />
        <h3>ReactFacts</h3>
      </div>
      <div>
        <h3 className="course">React Course - Project 1</h3>
      </div>
    </div>
  );
};

export default Navbar;
