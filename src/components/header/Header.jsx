import React from "react";
import image from "./../../assets/clarusway-logo.png";



const Header = () => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <img className="logo" src={image} alt="" />
        <h1 className="mx-auto p-2">Lesson Reminder</h1>
      </div>
    </nav>
  );
};

export default Header;
